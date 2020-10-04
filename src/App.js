import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import Admin from "./Components/Admin/Admin";
import AddEvent from "./Components/AddEvent/AddEvent";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="container">
        <Router>
          <Header></Header>
          
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/user-dashboard">
              <UserDashboard></UserDashboard>
            </PrivateRoute>

            <Route path="/admin">
              <Admin></Admin>
            </Route>

            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>

            <PrivateRoute path="/register/:name">
              <Register></Register>
            </PrivateRoute>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="*">
              <Error></Error>
            </Route>

          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
