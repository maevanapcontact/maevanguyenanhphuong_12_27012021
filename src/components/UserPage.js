import React, { Component } from "react";

import TopNav from "./TopNav";
import LeftNav from "./LeftNav";

class UserPage extends Component {
  render() {
    return (
      <div className="user-page">
        <TopNav />
        <LeftNav />
      </div>
    );
  }
}

export default UserPage;
