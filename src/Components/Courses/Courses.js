import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        // load data
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    // set data
    return (
        <Row xs={2} md={3} className="g-4 m-3">
            {
                courses.map(course =>
                    <Course
                        key={course.Key}
                        course={course}
                    ></Course>
                )
            }
        </Row>
    );
};

export default Courses;