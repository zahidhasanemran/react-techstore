import React, {Fragment} from 'react';
import Hero from '../Component/Hero';
import { Link } from 'react-router-dom';
import Services from '../Component/Homepage/Services';
import Featured from '../Component/Homepage/Featured';

function HomePage(props) {
    return (
        <Fragment>
            <Hero title="Awesome Gadgets" max="true">
                <Link className="main_link" to="/products" style={{margin: "2rem"}}>Our products</Link>
            </Hero>
            <Services></Services>
            <Featured></Featured>
        </Fragment>
    );
}

export default HomePage;