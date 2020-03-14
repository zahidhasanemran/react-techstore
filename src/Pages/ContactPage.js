import React, { Fragment } from 'react';
import Hero from '../Component/Hero';
import contImg from '../images/contactBcg.jpeg'
import Contact from '../Component/Contact/Contact';

function ContactPage(props) {
    return (
        <Fragment>
            <Hero img={contImg} ></Hero>
            <Contact></Contact>
        </Fragment>
    );
}

export default ContactPage;