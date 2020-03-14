import React, {Fragment} from 'react';
import Hero from '../Component/Hero';
import aboutBG from '../images/aboutBcg.jpeg';
import Info from '../Component/About/Info';



function AboutPage(props) {
    return (
        <Fragment>
            <Hero img={aboutBG}>

            </Hero>
            <Info></Info>
        </Fragment>
    );
}

export default AboutPage;