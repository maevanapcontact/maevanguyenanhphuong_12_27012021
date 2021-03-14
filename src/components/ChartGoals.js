import React, { Component } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { getUserAverageSession } from "../userAPI";

const CONTAINER = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background: #ff0000;

  .x-axis {
    color: #fff;
    opacity: 0.5;
    font-size: 12px;
    font-weight: 500;
  }

  .y-axis {
    opacity: 0;
  }
`;

const HEADER = styled.header`
  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 34px 60px 0 29px;
    line-height: 1.8;
    color: #fff;
    opacity: 0.5;
  }
`;

class ChartGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      averageSessions: [],
    };

    this.updateUserAverageSessions = this.updateUserAverageSessions.bind(this);
    this.chart = React.createRef();
  }

  componentDidMount() {
    getUserAverageSession(this.updateUserAverageSessions, this.props.idParam);
  }

  updateUserAverageSessions(data) {
    this.setState({
      id: data.userId,
      averageSessions: data.sessions,
    });
    this.updateChart();
  }

  updateChart() {
    const { averageSessions } = this.state;
    const height = 150;
    const width = 258;

    const chartElt = d3
      .select(this.chart.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(["L", "Ma", "Me", "J", "V", "S", "D"]);

    chartElt
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0, 125)")
      .call(d3.axisBottom(x).tickSize(0))
      .call((g) => g.select(".domain").remove());

    const y = d3.scaleLinear().domain([30, 50]).range([130, 0]);

    chartElt
      .append("g")
      .attr("transform", "translate(230," + 0 + ")")
      .attr("class", "y-axis")
      .call(d3.axisRight(y).tickValues([30, 40, 50]));

    chartElt
      .append("path")
      .datum(averageSessions)
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((elt) => elt.day)
          .y((elt) => elt.sessionLength)
      );
  }

  render() {
    return (
      <CONTAINER>
        <HEADER>
          <h2>Durée moyenne des sessions</h2>
        </HEADER>
        <div ref={this.chart}></div>
      </CONTAINER>
    );
  }
}

export default ChartGoals;
