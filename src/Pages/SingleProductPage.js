import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Component/Hero';
import SingleProductImg from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context/ProductContext';



function SingleProductPage(props) {
    return (
        <Fragment>
            <Hero img={SingleProductImg} title="Single Product Page"></Hero>
            <ProductConsumer>
                {value => {

                    const {singleProduct, addToCart, loading} = value; 

                    if(loading){
                        // console.log("From Loading");
                        
                        return <h2>product is loading </h2>
                    }  
                
                    const {company, description, id, price, title, image} = singleProduct;

                    return <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <img src={`../${image}`} alt={title} className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <h5 className="text__title mb-4">Model: {title} </h5>
                                    <h5 className="mb-4 text-capitalize text-muted">Company: {company} </h5>
                                    <h5 className="mb-4 text-capitalize text__main">Price: ${price} </h5>
                                    <p className="text__title text-capitalize">
                                        Some Info About Product: 
                                    </p>
                                    <p> {description} </p>
                                    <button type="button" className="main_link" style={{margin: '0.75rem'}} onClick={() => addToCart(id)}>Add To Cart</button>
                                    <Link to="/products" className="main_link" style={{margin: '0.75rem'}}>Back To Products</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    
                }}
            </ProductConsumer>
        </Fragment>
    );
}

export default SingleProductPage;