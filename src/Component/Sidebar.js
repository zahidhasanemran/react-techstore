import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context/ProductContext';

function Sidebar() {
    return(
        <ProductConsumer>
            {value => {
                const {links, sidebarOpen, handleSidebar} = value;
                
                return(
                    <SideWrapper SideShow={sidebarOpen}>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key={link.id}>
                                        <Link to={link.path} className="sidebar-link" onClick={handleSidebar} > {link.text} </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    )
}

export default Sidebar;


const SideWrapper = styled.nav`
    position: fixed;
    top: 60px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-right: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props => props.SideShow ? 'translateX(0)' : 'translateX(-100%)'};
    ul{
        list-style: none;
        padding: 0px!important;
        .sidebar-link{
            display: block;
            font-size: 1.5rem;
            text-transform: capitalize;
            color: var(--mainBlack);
            padding: 0.5rem 1.5rem;
            background: transparent;
            transition: var(--mainTransition);
            &:hover{
                text-decoration: none;
                background: var(--primaryColor);
                color: var(--mainWhite);
            }
        }
    }

    @media(min-width: 576px){
        width: 20rem;
    }


`