import React, { Component } from "react";
import styled from "styled-components";

import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import Dashboard from "./Dashboard";

const MAIN = styled.main`
  display: flex;
`;

class UserPage extends Component {
  render() {
    return (
      <div className="user-page">
        <TopNav />
        <MAIN>
          <LeftNav />
          <Dashboard />
        </MAIN>
      </div>
    );
  }
}

export default UserPage;
