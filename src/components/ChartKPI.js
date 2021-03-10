import React, { Component } from "react";
import styled from "styled-components";
// import * as d3 from "d3";

import { getUserDetails } from "../userAPI";

const CONTAINER = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background: #fbfbfb;
`;

class ChartKPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      todayScore: "",
    };

    this.updateUserDetails = this.updateUserDetails.bind(this);
    this.chart = React.createRef();
  }

  componentDidMount() {
    getUserDetails(this.updateUserDetails, this.props.idParam);
  }

  updateUserDetails(data) {
    this.setState({
      id: data.id,
      todayScore: data.todayScore || data.score,
    });
  }

  render() {
    return (
      <CONTAINER>
        <div ref={this.chart}></div>
      </CONTAINER>
    );
  }
}

export default ChartKPI;
