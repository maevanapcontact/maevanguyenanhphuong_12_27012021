import React, { Component } from "react";
import styled from "styled-components";

import NavIcon from "./NavIcon";

const NAV = styled.nav`
  width: 120px;
  height: 100vh;
  background: #000;
  padding: 60px 30px;
  position: relative;
`;

const GROUP = styled.div`
  width: 64px;
  height: 316px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: calc(50% - 90px);
  transform: translate(-50%, -50%);
`;

const COPYRIGHT = styled.span`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateY(-50%);
  color: #fff;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
`;

class LeftNav extends Component {
  render() {
    return (
      <NAV>
        <GROUP>
          <NavIcon path="/user" title="User Link" src="./images/icon-1.png" />
          <NavIcon path="/user" title="User Link" src="./images/icon-2.png" />
          <NavIcon path="/user" title="User Link" src="./images/icon-3.png" />
          <NavIcon path="/user" title="User Link" src="./images/icon-4.png" />
        </GROUP>
        <COPYRIGHT>Copiryght, SportSee 2020</COPYRIGHT>
      </NAV>
    );
  }
}

export default LeftNav;
