import React from 'react';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import logo from '../images/logo.svg';

function Navbar(props) {
    return (
        <ProductConsumer>
            {value => {
                const {cartItems, handleSidebar, handleSidecart} = value;
                // console.log(cartItems);
                
                return <NavWrapper>
                    <div className="nav-center">
                        <FaBars className="nav-icon" onClick={handleSidebar}></FaBars>
                        <img src={logo} alt="Tech Store"/>
                        
                        <div className="nav-cart">
                            <FaCartPlus className="nav-icon" onClick={handleSidecart}></FaCartPlus>
                            <div className="cart-items"> {cartItems} </div>
                        </div>
                    </div>
                </NavWrapper>
            }}
        </ProductConsumer>
    );
}

export default Navbar;


const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainGrey);
    z-index: 1;
    border-bottom: 3px solid var(--primaryColor);
    .nav-center{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1280px;
        margin: 0 auto;

    }
    .nav-icon{
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart{
        position: relative;
        .cart-items{
            background: var(--primaryColor);
            color: #fff;
            font-size: 0.85rem;
            position: absolute;
            top: -8px;
            right: -8px;
            padding: 0 5px;
            border-radius: 50%;
        }
    }


`