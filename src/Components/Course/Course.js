import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './course.css'
const Course = (props) => {
    const { CourseName, Img, fee } = props.course;
    return (
        <Col>
            <Card className="card-style">
                <Card.Img className="Img-height" variant="top" src={Img} />
                <Card.Body>
                    <Card.Title>{CourseName}</Card.Title>
                </Card.Body>
                <p className="fw-bold"> Fee per Module: ${fee}</p>
                <Button className="btn-size mb-3" variant="warning">Enroll</Button>
            </Card>
        </Col>

    );
};

export default Course;