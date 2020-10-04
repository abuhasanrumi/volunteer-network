import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';
import './Home.css'

const Home = () => {

    // const handleClick = () => {
    //     fetch('https://polar-dusk-30767.herokuapp.com/events', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(fakeEvents)
    //     })
    // }

    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch('https://polar-dusk-30767.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [])
    return (
        <div>
            <h1 className="heading text-uppercase">I grow by helping people in need.</h1>
            {/* <button onClick={handleClick}>Add Products</button> */}
            <Row>
                {
                    event.map(event => <Col md={3}><CardDetails event={event}></CardDetails></Col>)
                }
            </Row>
        </div>
    );
};

export default Home;