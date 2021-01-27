import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LINK = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background: #fff;
`;

const IMG = styled.img`
  width: 32px;
  height: 32px;
  object-fit: fill;
`;

class NavIcon extends Component {
  render() {
    const { path, title, src } = this.props;

    return (
      <LINK to={path} title={title}>
        <IMG src={src} alt="" />
      </LINK>
    );
  }
}

export default NavIcon;
