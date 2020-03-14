import React from 'react';
import styled from 'styled-components';
import mainBg from '../images/mainBcg.jpeg';


function Hero({img, title, max, children}) {
    return (
        <HeroWrapper max={max} img={img}>
           <div className="banner">
               <h1 className="title"> {title} </h1>
                {children}
           </div>
        </HeroWrapper>
    );
}

export default Hero;

const HeroWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => props.max ? 'calc(100vh - 100px)' : '60vh'};
    color: var(--mainWhite);
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => props.img }) center/cover no-repeat;
    .banner{
        .title{
            padding-top: 2rem;
            font-size: 3.5rem;
        }
    }

`;

Hero.defaultProps = {
    img: mainBg
}