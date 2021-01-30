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
    this.updateChart = this.updateChart.bind(this);

    this.chart = React.createRef();
  }

  componentDidMount() {
    getUserDetails(this.updateUserDetails);
  }

  updateUserDetails(data) {
    this.setState({
      id: data.id,
      todayScore: data.todayScore || data.score,
    });
    this.updateChart();
  }

  updateChart() {
    const { id, todayScore } = this.state;
    console.log("Chart KPI: ", id);
    console.log("Chart KPI: ", todayScore);
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
