import React from 'react';
import './education-icon.css'

const WithUs = () => {
    return (
        <div className=" ms-5 withus my-5 ">
            <div className="alignment-center">
                <div className="div-align">
                    <h1>Why Choose Us</h1>
                    <p>It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.</p>
                </div>
                <div className="d-flex div-align">
                    <div>
                        <i class="fas education-icon me-2 fa-book-open"></i>
                    </div>
                    <div className="ms-3">
                        <h3>Best Education System</h3>
                        <p>Advance Education Management</p>
                    </div>
                </div>
                <div className="d-flex div-align">
                    <div>
                        <i class="fas education-icon me-2 fa-graduation-cap"></i>
                    </div>
                    <div className="ms-3">
                        <h3>Learning Management</h3>
                        <p>LMS Integration</p>
                    </div>
                </div>
                <div className="d-flex div-align">
                    <div>
                        <i class="fas education-icon me-2 fa-certificate"></i>
                    </div>
                    <div className="ms-3">
                        <h3>Online Certification</h3>
                        <p>Performance Based Certificate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithUs;