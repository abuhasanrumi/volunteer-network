import React from "react";
import * as firebase from "firebase/app";
import './AdminUserList.css'


const AdminUserList = (props) => {
  
  const { _id, name, eventName, selectedDate, email, about } = props.userList;

  return (
    <div className="adminUserList">
        <p className="my-1">Name: {name}</p>
        <p className="m-0">Email: {email}</p>
        <p className="m-0">Date: {new Date(selectedDate).toDateString("dd/mm/yyyy")}</p>
        <p className="m-0">Event: {eventName}</p>
        <button className="btn btn-danger my-2" onClick={() => props.deleteProduct(_id)}>Delete</button>
    </div>
  );
};

export default AdminUserList;
