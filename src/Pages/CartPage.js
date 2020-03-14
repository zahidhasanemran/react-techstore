import React, {Fragment} from 'react';
import Cart from '../Component/CartPage/Cart';
import Hero from '../Component/Hero';
import cartImg from '../images/storeBcg.jpeg';



function CartPage(props) {
    return (
        <Fragment>
            <Hero img={cartImg} title=""></Hero>
            <Cart></Cart>
        </Fragment>
    );
}

export default CartPage;