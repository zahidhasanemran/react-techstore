import React, {Fragment} from 'react';
import Products from '../Component/Products/Products';
import Hero from '../Component/Hero'
import productBG from '../images/productsBcg.jpeg'

function ProductPage(props) {
    return (
        <Fragment>
            <Hero img={productBG}></Hero>
            <Products></Products>
        </Fragment>
    );
}

export default ProductPage;