import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <nav className="top-nav">
        <ul>
          <li>
            <Link to="/user" title="Homepage">
              <img src="./images/logo.png" alt="SportSee" />
            </Link>
          </li>
          <li>
            <Link to="/user" title="User Page">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/user" title="User Page">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/user" title="User Page">
              Réglages
            </Link>
          </li>
          <li>
            <Link to="/user" title="User Page">
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
