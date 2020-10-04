import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminUserList from "../AdminUserList/AdminUserList";
import './Admin.css'

const Admin = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showRegisteredUsers")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const deleteRegistration = userList.filter(
          (user) => user._id !== id
        );
        setUserList(deleteRegistration);
      });
  };
  return (
    <div>
      <Row>
        <Col md={2}>
          <div className="sideNav my-5">
            <Link className="btn btn-info my-2" to="/admin">Register List</Link>
            <br />
            <Link className="btn btn-success my-2" to="/addEvent">Add Event</Link>
          </div>
        </Col>
        <Col md={10}>
          <Row>
            {userList.map((user) => (
              <Col md={6}>
                <AdminUserList deleteProduct={deleteProduct} userList={user}></AdminUserList>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
