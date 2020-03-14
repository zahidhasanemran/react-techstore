import React, { Fragment } from 'react';
import Hero from '../Component/Hero';
import defImg from '../images/defaultBcg.jpeg'
import { Link } from 'react-router-dom';

function DefaultPage(props) {
    return (
        <Fragment>
            <Hero title="404" img={defImg} max="true">
                <h2 className="text-uppercase">Page not found</h2>
                <Link className="main_link" to="/" style={{marginTop: "2rem"}}>RETURN HOME</Link>
            </Hero>
        </Fragment>
    );
}

export default DefaultPage;