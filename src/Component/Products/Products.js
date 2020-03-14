import React from 'react';
import { ProductConsumer } from '../../context/ProductContext';
import Title from '../Title';
import Product from '../Product';
import FilterProducts from './FilterProducts';


function Products(props) {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProduct} = value;
                
                
                return <section className="py-5">
                    <div className="container">
                        <Title center title="Our products"></Title>
                        <FilterProducts></FilterProducts>
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <h6 className="text_title">Total Product {filteredProduct.length} </h6>
                            </div>
                        </div>
                        <div className="row py-5">
                            {filteredProduct.length === 0 ? (
                                <div className="col text-center">Sorry could not found any product</div>
                            ) : (filteredProduct.map(product => {
                                return <Product key={product.id} product={product}></Product>
                            }))}
                        </div>
                    </div>
                </section>
            }}
        </ProductConsumer>
    );
}

export default Products;