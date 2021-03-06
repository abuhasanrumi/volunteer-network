import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Row className="header">
                <Col md={3}>
                    <Link to="/"><img className="w-100" src={logo} alt=""/></Link>
                </Col>
                <Col md={5} className="navMenu">
                    <ul>
                        <li>{loggedInUser.email ? <Link className="specialNav" to="/user-dashboard">Dashboard</Link> : <Link className="specialNav" to="/">All Events</Link>}</li>
                        <li>Donations</li>
                        <li>Events</li>
                    </ul>
                </Col>
                <Col md={4} className="navButtons">
                    {
                        loggedInUser.email? <button className="navBtns navBtnOne" onClick={() => setLoggedInUser({})}>Logout</button> : <Link className="navBtns navBtnOne" to="/login">Login</Link>
                    }
                    <Link className="navBtns navBtnTwo" to="/admin">Admin</Link>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Header;