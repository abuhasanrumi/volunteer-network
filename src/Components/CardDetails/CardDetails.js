import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetails.css'

const CardDetails = (props) => {
    const {_id, name, img} = props.event
    console.log(_id)
    return (
        <div className="singleCard">
            <Link className="singleCardDetails" to={'/register/'+name}>
                <img className="w-100" src={img || "https://i.imgur.com/n2xdbZG.png"} alt=""/>
                <div className="title"><p>{name}</p></div>
            </Link>
            
        </div>
    );
};

export default CardDetails;