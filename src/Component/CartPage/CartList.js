import React, { Fragment } from 'react';
import CartItem from './CartItem';
import { ProductConsumer } from '../../context/ProductContext';



function CartList(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {value => {
                            const {removeItem, cart, increment, decrement} = value;
                            if(cart.length === 0){
                                return <h1 className="text__tilte text-center my-4">
                                    Your cart is currently empty.
                                </h1>
                            }

                            return (
                                <Fragment>
                                    {cart.map(item => (<CartItem 
                                    key={item.id} 
                                    cartItem={item}
                                    increment={increment}
                                    decrement={decrement}
                                    removeItem={removeItem}
                                    ></CartItem>))}
                                </Fragment>
                            )

                        }}
                    </ProductConsumer>
                </div>
            </div>
           
        </div>
    );
}

export default CartList;