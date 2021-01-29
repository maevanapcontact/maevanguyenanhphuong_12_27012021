import React, { Component } from "react";
import styled from "styled-components";
import {
  getUserDetails,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from "../userAPI";

import DataTag from "./DataTag";

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

const LARGEGRAPH = styled.div`
  width: 835px;
  height: 320px;
  border: 1px solid #000;
  margin-bottom: 28px;
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
      user: "",
    };
  }

  componentDidMount() {
    getUserDetails();
    getUserActivity();
    getUserAverageSession();
    getUserPerformance();
  }

  render() {
    return (
      <CONTAINER>
        <HEADER>
          <h1>
            Bonjour <NAME>Thomas</NAME>
          </h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </HEADER>
        <CONTENT>
          <section>
            <LARGEGRAPH></LARGEGRAPH>
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
              data="1.930kCal"
              type="Calories"
              color="#fbeaea"
            />
            <DataTag
              src="./images/chicken.png"
              title="Protéines"
              data="155g"
              type="Protéines"
              color="#e9f4fb"
            />
            <DataTag
              src="./images/apple.png"
              title="Glucides"
              data="290g"
              type="Glucides"
              color="#fbf6e5"
            />
            <DataTag
              src="./images/cheeseburger.png"
              title="Lipides"
              data="50g"
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
