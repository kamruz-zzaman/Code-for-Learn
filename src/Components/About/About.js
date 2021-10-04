import React, { useEffect, useState } from 'react';
import EduSys from '../Edu-sys/EduSys';
import { Row } from 'react-bootstrap';
import Instrucor from '../Instructor/Instructor';
import WithUs from '../Why-with-us/WithUs';

const About = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("./fakedata2 .json")
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <EduSys></EduSys>
            <h2 className="mt-5">Our Instructors</h2>
            <Row xs={2} md={3} className="g-4 m-5">
                {
                    instructors.map(instructor => <Instrucor
                        key={instructor.Key}
                        instructor={instructor}
                    >
                    </Instrucor>)
                }
            </Row>
            <hr />
            <WithUs></WithUs>
        </div>
    );
};

export default About;