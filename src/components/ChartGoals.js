import React, { Component } from "react";
import styled from "styled-components";
// import * as d3 from "d3";

import { getUserAverageSession } from "../userAPI";

const CONTAINER = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 5px;
  background: #ff0000;
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
  }

  render() {
    return (
      <CONTAINER>
        <div ref={this.chart}></div>
      </CONTAINER>
    );
  }
}

export default ChartGoals;
