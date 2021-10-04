import React from 'react';
import { Button } from 'react-bootstrap';
import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className="row  g-5 mt-5 contact-bg">
                <div className="col-4">
                    <i class="fas fa-map-marker-alt contact-icon"></i><br />
                    <h2>Office Address</h2>
                    <p>Dohar,Dhaka-1332, <br /> Bangladesh</p>
                </div>
                <div className="col-4">
                    <i class="fas fa-business-time contact-icon"></i><br />
                    <h2> Email Address</h2>
                    <p>codeforlearn@gmail.com <br />
                        info@gmail.com</p>
                </div>
                <div className="col-4">
                    <i class="fas fa-envelope-open-text contact-icon"></i><br />
                    <h2>Office Time</h2>
                    <p>Mon - Sat 9:00 - 5:00 <br />
                        Sunday - Closed</p>
                </div>
            </div>
            <div className=" bg-danger my-5 d-flex">
                <div className="col-6 text-alignment p-5">
                    <h1 className="ms-3 fw-bold">Send us message</h1>
                    <input className="p-1 w-75 mx-3 my-2 rounded" type="email" name="" id="" placeholder="Your E-Mail" /><br />
                    <input className="p-1 w-75 mx-3 my-2 rounded" type="text" name="" id="" placeholder="Your Name" /><br />
                    <textarea className="p-1 w-75 mx-3 my-2 rounded" rows="4" cols="50" name="comment" form="usrform" placeholder="Enter text here...">
                    </textarea>
                    <Button className="btn btn-warning btn-align">Send Messege</Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;