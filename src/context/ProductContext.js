import React, {Component, createContext} from 'react';
import { linkData } from './linkData';
import { SocialData } from './SocialData';
import {items} from './productData';

const ProductContext = createContext();

class ProductProvider extends Component{

    state={
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
        socials: SocialData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProduct: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false,
        search: "",
        company: "all",
        price: 0,
        max: 0,
        min: 0,
        shipping: false

    }

   

    setProduct = (products) => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product;
            
        })
        // max price

        let maxPrice = Math.max(...storeProducts.map(item => item.price));
        // console.log(maxPrice);
        
        

        // featured products 
        let featuredProducts = storeProducts.filter(item => item.featured);
        this.setState({
            storeProducts,
            featuredProducts,
            filteredProduct: storeProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
            price: maxPrice,
            max: maxPrice
        }, ()=> {
            this.addTotal();
        })


        
    }

    getStorageCart = () => {
        let cart;
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }else{
            cart = [];
        }
        return cart;
    }

    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {}
    }

    getTotal = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        });
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));


        return {cartItems, subTotal, tax, total}

    }

    addTotal = () => {
        const totals = this.getTotal();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total

        })
    }

    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProduct = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);

        if(!tempItem){
            tempItem = tempProduct.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(()=>{
            return {cart: tempCart}
        }, ()=>{
            this.syncStorage();
            this.openCart();
            this.addTotal();
        })
    }

    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: {...product},
            loading: false
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        let item = tempCart.find(item => item.id === id);
        item.count++  
        // console.log(tempCart);
        item.total = item.count * item.price;
        item.total = parseFloat(item.total.toFixed(2));
        this.setState(()=> {
            return{
                cart: [...tempCart]
            }
        }, ()=> {
            this.addTotal();
            this.syncStorage();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        let item = tempCart.find(item => item.id === id);
        item.count --;
        if(item.count === 0){
            this.removeItem(id);
        }else{
            item.total = item.count * item.price;
            item.total = parseFloat(item.total.toFixed(2));
            this.setState(()=> {
                return{
                    cart: [...tempCart]
                }
            }, ()=> {
                this.addTotal();
                this.syncStorage();
            })
        }
       
        

    }

    removeItem = (id) =>{
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({
            cart: [...tempCart]
        }, 
        ()=> {
            this.addTotal();
            this.syncStorage();
        })
    }

    clearCart = () => {
       this.setState({
           cart: []
       }, ()=> {
        this.addTotal();
        this.syncStorage();
    })
        
    }

    componentDidMount(){
        this.setProduct(items);
    }

    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    handleSidecart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    closeCart = () => {
        this.setState({cartOpen: false})
    }

    openCart = () => {
        this.setState({cartOpen: true})
    }

    handleChange = (event) => {
        let name = event.target.name;
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        // console.log(`Name: ${name}, Value ${value}`);
        this.setState({
            [name]: value
        },this.sortData)
        

        
    }

    sortData = () => {
        let {storeProducts, search, shipping, price,  company} = this.state;
        price = parseInt(price);
        let tempProducts = [...storeProducts];

        tempProducts = tempProducts.filter(item => item.price <= price);

        if(company !== "all"){
            tempProducts = tempProducts.filter(item => item.company === company);
        }

        if(shipping){
            tempProducts = tempProducts.filter(item => item.freeShipping === true);
        }

        if(search.length > 0){
            tempProducts = tempProducts.filter(item => {
                let tempSearch = search.toLowerCase();
                let tempTitle = item.title.toLowerCase().slice(0,search.length);

                if(tempSearch === tempTitle){
                    return item;
                }

            })
        }

        this.setState({
            filteredProduct: tempProducts
        })
        
    }

    render(){
        return(
            <ProductContext.Provider value={{
                
                ...this.state, 
                handleSidebar: this.handleSidebar, 
                handleSidecart: this.handleSidecart, 
                closeCart: this.closeCart, 
                openCart: this.openCart, 
                setSingleProduct: this.setSingleProduct, 
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleChange: this.handleChange


                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}