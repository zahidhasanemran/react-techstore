import React from 'react';
import Title from '../Title';
import abtBG from '../../images/aboutBcg.jpeg';


function Info(props) {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 md-auto col-md-6 my-3">
                        <img src={abtBG} alt="" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-10 md-auto col-md-6 my-3">
                        <Title title="About Us"></Title>
                        <p className="text-lead my-3 text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit repellendus veritatis. Eligendi nam vitae, quasi esse quae temporibus nesciunt?</p>
                        <button className="main_link" type="button" style={{marginTop: "2rem"}}>More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;