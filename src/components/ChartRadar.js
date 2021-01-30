import React, { Component } from "react";
import styled from "styled-components";
// import * as d3 from "d3";

import { getUserPerformance } from "../userAPI";

const CONTAINER = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background: #282d30;
`;

class ChartRadar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      kind: {},
      data: [],
    };

    this.updateUserPerformance = this.updateUserPerformance.bind(this);
    this.updateChart = this.updateChart.bind(this);

    this.chart = React.createRef();
  }

  componentDidMount() {
    getUserPerformance(this.updateUserPerformance);
  }

  updateUserPerformance(data) {
    this.setState({
      id: data.userId,
      kind: data.kind,
      data: data.data,
    });
    this.updateChart();
  }

  updateChart() {
    const { id, kind, data } = this.state;
    console.log("Chart Radar: ", id);
    console.log("Chart Radar: ", kind);
    console.log("Chart Radar: ", data);
  }

  render() {
    return (
      <CONTAINER>
        <div ref={this.chart}></div>
      </CONTAINER>
    );
  }
}

export default ChartRadar;
