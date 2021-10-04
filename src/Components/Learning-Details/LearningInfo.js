import React from 'react';
import img from '../../Images/course-1.jpg'
import './learn-info.css'
// info data adding
const LearningInfo = () => {
    return (
        <div className="row g-5 mt-3">
            <hr />
            <div className="col-6 ms-4 mb-3">
                <img className="rounded" src={img} alt="" />
            </div>
            <div className="col-5 ms-5 mb-5">
                <div className="text-alignment ms-5">
                    <h4 className='ms-4 fw-bold'><i class="icon fas fa-user"></i> Learn Anything Online</h4>
                    <p className="ms-5 fs-6">There's Nothing Better Than Getting Better. Keep Growing With Unlimited Creative Classes. Grow Without Limits. Discover What You Can Create With Thousands of Inspiring Classes. Browse Projects. Accomplish Real Growth. Support of a Community.</p>
                </div>
                <div className="text-alignment ms-5">
                    <h4 className='ms-4 fw-bold'><i class="icon fas fa-trophy"></i> Communicate People</h4>
                    <p className="ms-5 fs-6">The best way to communicate is by being open and honest. ... Being able to label your feelings and work through them can help you when communicating with others.</p>
                </div>
                <div className="text-alignment ms-5">
                    <h4 className='ms-4 fw-bold'><i class="icon fas fa-share-square"></i> Share Your Knowledge</h4>
                    <p className="ms-5 fs-6">Have you heard about the practice knowledge sharing, but not about why it’s so important for organizations to implement it? We’ll let you know why it’s essential and what’s in it for you.</p>
                </div>
            </div>
        </div>
    );
};

export default LearningInfo;