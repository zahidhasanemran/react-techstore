import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context/ProductContext';


function Footer(props) {
    return (
        <ProductConsumer>
            {value => {
                return <FooterContainer>
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-capitalize">Copyright &copy; tech store {new Date().getFullYear()} all right reserved. </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-around">
                                {value.socials.map(social => <a href={social.url} key={social.id}> {social.icons} </a>)}
                            </div>
                        </div>
                    </div>
                </FooterContainer>
            }}
        </ProductConsumer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    background: var(--darkGrey);
    color: var(--mainWhite);
    .icon{
        font-size: 1.5rem;
        color: var(--mainWhite);
        transition: var(--mainTransition);
        &:hover{
            color: var(--primaryColor);
            cursor: pointer;

        }
    }


`;