import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NAV = styled.nav`
  height: 90px;
  background: #000;
  padding: 0 87px 0 29px;
`;

const UL = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IMG = styled.img`
  width: 178px;
`;

const LINK = styled(Link)`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

class TopNav extends Component {
  render() {
    return (
      <NAV>
        <UL>
          <li>
            <LINK to="/user" title="Homepage">
              <IMG src="./images/logo.png" alt="SportSee" />
            </LINK>
          </li>
          <li>
            <LINK to="/user" title="User Page">
              Accueil
            </LINK>
          </li>
          <li>
            <LINK to="/user" title="User Page">
              Profil
            </LINK>
          </li>
          <li>
            <LINK to="/user" title="User Page">
              Réglages
            </LINK>
          </li>
          <li>
            <LINK to="/user" title="User Page">
              Communauté
            </LINK>
          </li>
        </UL>
      </NAV>
    );
  }
}

export default TopNav;
