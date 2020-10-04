import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import UserDashDetails from '../UserDashDetails/UserDashDetails';

const UserDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [registeredUser, setRegisteredUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/registeredUsers?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setRegisteredUser(data))
    }, [])

    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            const deleteRegistration = registeredUser.filter(user => user._id !== id);
            setRegisteredUser(deleteRegistration)
        })
     }


    return (
        <div>
            <h1 className="text-center text-uppercase my-5">Dashboard</h1>
            {
                loggedInUser.email ? <h4>You've registered for {registeredUser.length} events</h4> : <h4>You haven't registered for any events yet</h4>
            }
            <Row>
                {
                    registeredUser.length > 0 && loggedInUser.email ? registeredUser.map(rs => <Col key={rs._id}  md={6}><UserDashDetails deleteProduct={deleteProduct} registeredCard={rs}></UserDashDetails></Col>) : ''                }
            </Row>
        </div>
    );
};

export default UserDashboard;