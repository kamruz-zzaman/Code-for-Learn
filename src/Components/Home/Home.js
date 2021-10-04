import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from '../Course/Course';
import Headerimage from '../Cover-Image/Headerimage';
import LearningInfo from '../Learning-Details/LearningInfo';

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {

        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <Headerimage></Headerimage>
            <hr />
            <h1 className="mt-5">Our Awesome Courses</h1>
            <Row xs={2} md={3} className="g-4 m-3">
                {
                    courses.slice(0, 4).map(course =>
                        <Course
                            key={course.Key}
                            course={course}
                        ></Course>
                    )
                }
            </Row>
            <LearningInfo></LearningInfo>
        </div>
    );
};

export default Home;