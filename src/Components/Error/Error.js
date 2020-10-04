import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    const errorStyle={
        textAlign: 'center'
    }
    return (
        <div style={errorStyle}>
            <h1>404 Error</h1>
            <h2>Sorry, nothing is here</h2>
            <Link to="/">Visit Home</Link>
        </div>
    );
};

export default Error;