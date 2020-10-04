import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email}
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    return (
        <div>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="loginBox">
                        <h3 className="text-center text-uppercase">Login</h3>
                        <Button onClick={handleGoogleSignIn} className="w-100 mt-3" variant="contained" color="primary">Continue with Google</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;