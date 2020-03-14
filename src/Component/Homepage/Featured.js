import React from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';
import Title from '../Title';
import { ProductConsumer } from '../../context/ProductContext';


function Featured(props) {
    return (
        <ProductConsumer>
            {value => {
                const {featuredProducts} = value;
                return <section className="py-5">
                    <div className="container">
                        <Title title="Featured Products" center></Title>
                        <div className="row my-5">
                            {featuredProducts.map(product => (<Product key={product.id} product={product}>
                                
                            </Product>))}
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <Link to="/products" className="main_link">Our Products </Link>
                            </div>
                        </div>
                    </div>

                </section>
            }}
        </ProductConsumer>
    );
}

export default Featured;