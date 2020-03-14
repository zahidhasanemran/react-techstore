import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaRedo, FaDollarSign} from 'react-icons/fa';

class Services extends Component {

    state = {
        services: [
            {id: 1, icon: <FaDolly/>, title: "Free shipping", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus?"},
            {id: 2, icon: <FaRedo/>, title: "30 days return Policy", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus?"},
            {id: 3, icon: <FaDollarSign/>, title: "secured payment", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus?"}
        ]
    }

    render() {
        return (
            <ServicesWrapper className=" py-5">
               <div className="container">
                    <div className="row">
                        {this.state.services.map(item => {
                            return(
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center" key={item.id}>
                                    <div className="service-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-capitalize mt-3"> {item.title} </h4>
                                    <p> {item.text} </p>
                                </div>
                            )
                        })}
                </div>
               </div>
            </ServicesWrapper>
        );
    }
}

export default Services;

const ServicesWrapper = styled.div`
    background: rgba(95, 183, 234, 0.5);
    .service-icon{
        font-size: 2.5rem;
        color: var(--primaryColor);
    }
    p{
        color: var(--darkGrey);
    }

`;