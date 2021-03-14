import React, { Component } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { getUserDetails } from "../userAPI";

const CONTAINER = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background: #fbfbfb;

  .arc {
    fill: #ff0000;
  }

  .score-value {
    font-size: 1.6rem;
    font-weight: 700;
    fill: #282d30;
  }

  .score-text {
    fill: #74798c;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

const HEADER = styled.header`
  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 24px 0 0 30px;
    color: #20253a;
  }
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
    this.updateChart();
  }

  updateChart() {
    const { todayScore } = this.state;
    const width = 250;
    const height = 200;

    const chartElt = d3
      .select(this.chart.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(125, 100)");

    const arc = d3
      .arc()
      .innerRadius(80)
      .outerRadius(90)
      .startAngle(0)
      .endAngle(5);

    chartElt.append("path").attr("class", "arc").attr("d", arc);

    chartElt
      .append("text")
      .text(`${todayScore * 100}%`)
      .attr("class", "score-value")
      .attr("x", -20)
      .attr("y", -10);

    chartElt
      .append("text")
      .text("de votre")
      .attr("class", "score-text")
      .attr("x", -35)
      .attr("y", 15);

    chartElt
      .append("text")
      .text("objectif")
      .attr("class", "score-text")
      .attr("x", -32)
      .attr("y", 40);
  }

  render() {
    return (
      <CONTAINER>
        <HEADER>
          <h2>Score</h2>
        </HEADER>
        <div ref={this.chart}></div>
      </CONTAINER>
    );
  }
}

export default ChartKPI;
