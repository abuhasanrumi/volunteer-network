import React, { useContext, useEffect, useState } from 'react';
import './Register.css'
import { Col, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {name} = useParams();
    const eventName = name;
    const [selectedDate, setSelectedDate] = useState(new Date());
    

    const handleDateChange = (date) => {
        const newDate = date;
        setSelectedDate(newDate);
    };
    

    
    const handleRegister = () => {
        const about = document.getElementById('about').value;
        const newRegister = {...loggedInUser, selectedDate, eventName, about}
        fetch('https://polar-dusk-30767.herokuapp.com/registeredUsers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegister)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data)
        })

        fetch('https://polar-dusk-30767.herokuapp.com/showRegisteredUsers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRegister)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data)
        })
        

    }
    return (
        <div>
            <Row className="register">
                <Col md={5}>
                    <form className="registerForm">
                        <h4>Register as a Volunteer</h4>
                        <input className="form-control" type="text" defaultValue={loggedInUser.name} name="Name" required/>
                        <input className="form-control" type="email" defaultValue={loggedInUser.email} name="Email" required/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container>
                                <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="volunteerDate"
                                    label="When you want to volunteer?"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <textarea id="about" className="form-control" placeholder="Tell us about your self" name="aboutVolunteer" required></textarea>
                        <input className="form-control" defaultValue={name} type="text" name="eventName" disabled/>
                        <Link to="/user-dashboard"><Button onClick={handleRegister} className="w-100 mt-3" variant="contained" color="primary">Register</Button></Link>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;