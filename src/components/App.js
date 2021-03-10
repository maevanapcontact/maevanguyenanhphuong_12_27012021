import React, { Component } from "react";
import { Route } from "react-router-dom";

import UserPage from "./UserPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/user" component={UserPage} />
      </div>
    );
  }
}

export default App;
