import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './UserDashDetails.css'

const UserDashDetails = (props) => {
    const {_id, name, eventName, selectedDate, email, about} = props.registeredCard;
    const id = _id;
    

    return (
        <div className="singleDashDetails">
            <Row>
                <Col md={4}>
                    <img className="w-100" src="https://i.imgur.com/S49jfn5.png" alt=""/>
                </Col>
                <Col md={8}>
                    <h4>{eventName}</h4>
                    <p className="m-0">Registered for:  {(new Date(selectedDate).toDateString('dd/mm/yyyy'))}</p>
                    <p>{about}</p>
                    <button onClick={()=>props.deleteProduct(id)} className="form-control btn btn-danger">Cancel</button>
                </Col>
            </Row>
        </div>
    );
};

export default UserDashDetails;