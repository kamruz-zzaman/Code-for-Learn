import React from 'react';

const Course = (props) => {
    const { CourseName, Img, fee } = props.course;
    return (
        <div>
            <img src={Img} alt="" />
            <h1>HCourse Name: {CourseName}</h1>
            <h5>Fee:{fee}</h5>
        </div>
    );
};

export default Course;