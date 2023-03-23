import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import Layout from "./screens/Shared/Layout";
import MainApp from "./screens/MainApp";
import AddTicket from "./screens/Tickets/AddTicket/AddTicket";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={MainApp} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/addTicket"} component={AddTicket} />
        <Layout></Layout>
      </Switch>
    </div>
  );
}

export default App;
