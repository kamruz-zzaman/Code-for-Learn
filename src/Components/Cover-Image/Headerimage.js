import React from 'react';
import { Button } from 'react-bootstrap';
import './headerImg.css'

const Headerimage = () => {
    return (
        <div>
            <div className="header-cover">
            </div>
            <div className="text-sizing">
                <h2>The Best Professional e-Learning
                    Courses For better World!</h2>
                <h4 className="mt-4">1500+ Centers Across the World</h4>
                <Button className="btn btn-danger mt-3">Enroll Now</Button>
            </div>
        </div>

    );
};

export default Headerimage;