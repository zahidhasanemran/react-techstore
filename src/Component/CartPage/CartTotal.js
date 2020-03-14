import React from 'react';
import { ProductConsumer } from '../../context/ProductContext';


function CartTotal(props) {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const {cartTotal, clearCart, cartSubTotal, cartTax} = value;
                        return <div className="col text__tilte text-center my-4">
                            <button onClick={clearCart} className="btn btn-outline-danger text-capitalize mb-4">Clear Cart</button>
                            <h3>Subtotal : ${cartSubTotal} </h3>
                            <h3>Tax : ${cartTax} </h3>
                            <h3>Total : ${cartTotal} </h3>

                        </div>
                    }}
                </ProductConsumer>
            </div>
        </div>
    );
}

export default CartTotal;