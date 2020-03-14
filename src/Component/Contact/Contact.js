import React from 'react';
import Title from '../Title';

function Contact(props) {
    return (
        <section className="py-5 container">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us"></Title>
                    <form className="mt-5" method="POST" action="https://formspree.io/emranhstbq@gmail.com">
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="form-group mt-4">
                            <input type="submit" value="Send" className="form-control bg-primary text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;