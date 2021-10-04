import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Instructor = (props) => {
    const { InstructorNAme, Img, Sub } = props.instructor;
    return (
        <Col>
            <Card className="card-style">
                <Card.Img className="Img-height" variant="top" src={Img} />
                <Card.Body>
                    <Card.Title>{InstructorNAme}</Card.Title>
                    <p>{Sub}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Instructor;