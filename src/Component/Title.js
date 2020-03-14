import React from 'react';
import styled from 'styled-components';


function Title({title, center}) {
    return (
        <TitleWrapper center={center} className="row">
            <div className="col">
                <h2 className="text-title"> {title} </h2>
                <div className="title-underline"></div>
            </div>
        </TitleWrapper>
    );
}

export default Title;


const TitleWrapper = styled.div`
    text-align: ${props => props.center ? 'center' : 'left'};
    .title-underline{
        height: 0.25rem;
        width: 7rem;
        background: var(--primaryColor);
        margin: ${props => props.center ? "0 auto" : "0"}
    }

`;