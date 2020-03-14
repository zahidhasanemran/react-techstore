import React from 'react';
import Title from '../Title';
import CartTotal from './CartTotal';
import CartColumn from './CartColumn';
import CartList from './CartList';


function Cart(props) {
    return (
        <div className="py-5">

            {/* title */}
            <div className="container">
                <Title title="Your cart Items" center></Title>
            </div>

            {/* cart Column  */}
            <CartColumn></CartColumn>

            {/* Cart Lists */}
            <CartList></CartList>

            {/* Cart Totals */}
            <CartTotal></CartTotal>
        </div>
    );
}

export default Cart;