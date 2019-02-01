import React, { Component } from "react";
import Employees from "./Components/Employees";
import User from "./Components/User";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/users" component={Employees} />
          <Route exact path="/:username" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
