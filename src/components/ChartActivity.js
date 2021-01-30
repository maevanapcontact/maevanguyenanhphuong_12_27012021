import React, { Component } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { getUserActivity } from "../userAPI";

const CONTAINER = styled.div`
  background: #fbfbfb;
  width: 835px;
  height: 320px;
  border-radius: 5px;
  padding: 24px 30px;
  margin-bottom: 28px;
`;

const HEADER = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .units {
    display: flex;
  }

  .header-elt {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #74798c;
    margin-left: 30px;
  }
`;

const ROUND = styled.div`
  background: ${(props) => props.color};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 10px;
`;

class ChartActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sessions: [],
    };

    this.updateUserActivity = this.updateUserActivity.bind(this);
    this.updateChart = this.updateChart.bind(this);

    this.chart = React.createRef();
  }

  componentDidMount() {
    getUserActivity(this.updateUserActivity);
  }

  updateUserActivity(data) {
    this.setState({
      id: data.userId,
      sessions: data.sessions,
    });
    this.updateChart();
  }

  updateChart() {
    const { id, sessions } = this.state;
    console.log("Chart Activity: ", id);
    console.log("Chart Activity: ", sessions);

    const chartElt = d3
      .select(this.chart.current)
      .append("svg")
      .attr("width", 770)
      .attr("height", 270);

    chartElt
      .selectAll("rect")
      .data(sessions)
      .enter()
      .append("rect")
      .attr("x", (elt, index) => index * 84)
      .attr("y", (elt, index) => 250)
      .attr("width", 7)
      .attr("height", (elt, index) => (elt.kilogram - 68) * 100)
      .attr("fill", "#000");
  }

  render() {
    return (
      <CONTAINER>
        <HEADER>
          <h2>Activité quotidienne</h2>
          <div className="units">
            <div className="header-elt">
              <ROUND color="#000" />
              <span>Poids (kg)</span>
            </div>
            <div className="header-elt">
              <ROUND color="#e60000" />
              <span>Calories brûlées (kCal)</span>
            </div>
          </div>
        </HEADER>
        <div ref={this.chart}></div>
      </CONTAINER>
    );
  }
}

export default ChartActivity;
