import React from 'react';
import { ProductConsumer } from '../context/ProductContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function SideCart(props) {
    return (
        <ProductConsumer>
            {value => {
                const {cartOpen, closeCart, cart, cartTotal} = value;
                
                
                return <CartWrapper CartShow={cartOpen} onClick={closeCart}>
                    <ul>
                        {cart.map(item => {
                            return <li key={item.id} className="cart-item mb-4">
                                <img src={`../${item.image}`} width="35" alt={item.title}/>
                                <div className="mt-3">
                                    <h6 className="text-uppercase"> {item.title} </h6>
                                    <h6 className="text_title text-capitalize"> Amount: {item.count} </h6>
                                </div>
                            </li>
                        })}
                    </ul>
                    <h4 className="text-capitalize text_main">
                        Cart Total: ${cartTotal} 
                    </h4>
                    <div className="text-center my-5">
                        <Link to="/cart" className="main_link">Cart Page</Link>
                    </div>
                </CartWrapper>
            }}
        </ProductConsumer>
    );
}

export default SideCart;


const CartWrapper= styled.div`
    position: fixed;
    top: 60px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    transform: ${props => props.CartShow ? 'translateX(0)' : 'translateX(100%)'};
    border-left: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    overflow-y: scroll;
    padding: 2rem;
    ul{
        padding: 0!important;
        list-style: none;
        li{
            display: flex;
            align-items: center;
            h6{
                margin: 0px;
            }
        }
    }
    @media(min-width: 576px){
        width: 20rem;
    }
    .cart-item{

    }



`