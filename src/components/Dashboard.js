import React, { Component } from "react";
import styled from "styled-components";
import {
  getUserDetails,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from "../userAPI";

import DataTag from "./DataTag";
import ChartWeight from "./ChartWeight";

const CONTAINER = styled.div`
  padding: 60px 0;
  max-width: 1320px;
  width: 100%;
  margin: auto;
`;

const HEADER = styled.header`
  margin-bottom: 75px;
  padding: 0 100px;

  h1 {
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

const NAME = styled.span`
  color: #ff0000;
`;

const CONTENT = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  section {
    margin: auto;
  }

  aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 835px;

    @media screen and (min-width: 1350px) {
      flex-direction: column;
      margin-right: 60px;
    }

    > div {
      margin: 0 5px;
    }
  }
`;

const GROUP = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GRAPH = styled.div`
  width: 258px;
  height: 263px;
  border: 1px solid #000;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      todayScore: "",
      keyData: {},
      sessions: [],
      averageSessions: [],
      kind: {},
      data: [],
    };
    this.updateUserDetails = this.updateUserDetails.bind(this);
    this.updateUserActivity = this.updateUserActivity.bind(this);
    this.updateUserAverageSession = this.updateUserAverageSession.bind(this);
    this.updateUserPerformance = this.updateUserPerformance.bind(this);
  }

  componentDidMount() {
    getUserDetails(this.updateUserDetails);
    getUserActivity(this.updateUserActivity);
    getUserAverageSession(this.updateUserAverageSession);
    getUserPerformance(this.updateUserPerformance);
  }

  updateUserDetails(data) {
    this.setState({
      id: data.id,
      firstName: data.userInfos.firstName,
      todayScore: data.todayScore,
      keyData: data.keyData,
    });
  }

  updateUserActivity(data) {
    this.setState({
      sessions: data.sessions,
    });
  }

  updateUserAverageSession(data) {
    this.setState({
      averageSessions: data.sessions,
    });
  }

  updateUserPerformance(data) {
    this.setState({
      kind: data.kind,
      data: data.data,
    });
  }

  render() {
    const { firstName, keyData, sessions } = this.state;
    const {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    } = keyData;

    return (
      <CONTAINER>
        <HEADER>
          <h1>
            Bonjour <NAME>{firstName}</NAME>
          </h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </HEADER>
        <CONTENT>
          <section>
            <ChartWeight sessions={sessions} />
            <GROUP>
              <GRAPH></GRAPH>
              <GRAPH></GRAPH>
              <GRAPH></GRAPH>
            </GROUP>
          </section>
          <aside>
            <DataTag
              src="./images/energy.png"
              title="Energy"
              data={`${calorieCount}kCal`}
              type="Calories"
              color="#fbeaea"
            />
            <DataTag
              src="./images/chicken.png"
              title="Protéines"
              data={`${proteinCount}g`}
              type="Protéines"
              color="#e9f4fb"
            />
            <DataTag
              src="./images/apple.png"
              title="Glucides"
              data={`${carbohydrateCount}g`}
              type="Glucides"
              color="#fbf6e5"
            />
            <DataTag
              src="./images/cheeseburger.png"
              title="Lipides"
              data={`${lipidCount}g`}
              type="Lipides"
              color="#fbeaef"
            />
          </aside>
        </CONTENT>
      </CONTAINER>
    );
  }
}

export default Dashboard;
