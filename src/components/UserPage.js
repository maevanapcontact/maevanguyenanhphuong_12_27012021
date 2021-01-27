import React, { Component } from "react";
import "../css/UserPage.css";

import TopNav from "./TopNav";

class UserPage extends Component {
  render() {
    return (
      <div className="user-page">
        <TopNav />
      </div>
    );
  }
}

export default UserPage;
