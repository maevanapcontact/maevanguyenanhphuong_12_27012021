import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as d3 from "d3";

const CONTAINER = styled.div`
  background: #fbfbfb;
  width: 835px;
  height: 320px;
  border-radius: 5px;
  padding: 24px 30px;
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

class ChartWeight extends Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
  }

  componentDidMount() {
    const { sessions } = this.props;
    console.log(sessions);

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
      .attr("y", (elt, index) => 270 - 100 * (elt.kilogram - 68))
      .attr("width", 7)
      .attr("height", (elt, index) => (elt.kilogram - 68) * 270)
      .attr("fill", "#000");
  }

  render() {
    // return <div ref={this.myRef}>Testing Refs</div>;

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

ChartWeight.propTypes = {
  sessions: PropTypes.array.isRequired,
};

export default ChartWeight;
