import DateFnsUtils from '@date-io/date-fns';
import { Grid, Link } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';

const AddEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date());


    const handleAddEvent = () => {

        const name = document.getElementById('eventName').value;
        const about = document.getElementById('eventDescription').value;
        const newEvent = {...loggedInUser, selectedDate, name, about }
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then (data => {
            alert('Event Added')
        })

        
    }
    
    const handleDateChange = (date) => {
        const newDate = date;
        setSelectedDate(newDate);
    };
    return (
        <div className="addEvent mt-5">
            <Row>
                <Col md={2}>
                    <div className="sideNav my-5">
                        <Link className="btn btn-info my-2 text-white" to="/admin">Register List</Link>
                        <br />
                        <Link className="btn btn-success my-2 text-white" to="/addEvent">Add Event</Link>
                    </div>
                </Col>
                <Col md={10}>
                    <span>Event Title</span>
                    <input type="text" className="form-control" id="eventName"/>
                    <span>Event Date</span>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container>
                            <KeyboardDatePicker
                                disableToolbar
                                required
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="volunteerDate"
                                label="When the event occurs?"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <span>Event Description</span>
                    <textarea type="text" className="form-control" id="eventDescription"></textarea>
                    <button onClick={handleAddEvent} className="btn btn-success my-4">Submit</button>
                </Col>
            </Row>
        </div>
    );
};

export default AddEvent;