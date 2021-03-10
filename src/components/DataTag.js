import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CONTAINER = styled.div`
  background: #fbfbfb;
  width: 258px;
  border-radius: 5px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  padding: 32px;
`;

const ICON = styled.div`
  background: ${(props) => props.color};
  border-radius: 6px;
  width: 60px;
  height: 60px;
  position: relative;
`;

const IMG = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DETAILS = styled.div`
  margin-left: 24px;

  span {
    display: block;
  }

  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  span:nth-child(2) {
    font-size: 0.8rem;
    color: #74798c;
  }
`;

class DataTag extends Component {
  render() {
    const { src, title, data, type, color } = this.props;

    return (
      <CONTAINER>
        <ICON color={color}>
          <IMG src={src} alt={title} />
        </ICON>
        <DETAILS>
          <span>{data}</span>
          <span>{type}</span>
        </DETAILS>
      </CONTAINER>
    );
  }
}

DataTag.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default DataTag;
