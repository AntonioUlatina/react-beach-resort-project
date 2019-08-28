import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Games from "./pages/Games";
import SingleGame from "./pages/SingleGame";
import Error from "./pages/Error";

import Accordion from "./components/Accordion"; //Erase later?

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Topics from "./pages/Topics";
import SingleTopic from "./pages/SingleTopic";

function App() {
  return (
    <>
      <Navbar />
      <Row>
        <Col sm={3}>
          <Accordion />
        </Col>
        <Col sm={9}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games/" component={Games} />
            <Route exact path="/game/:slug" component={SingleGame} />
            <Route exact path="/tempTopics" component={Topics} />
            <Route exact path="/tempTopics/:slug" component={SingleTopic} />
            <Route component={Error} />
          </Switch>
        </Col>
      </Row>
    </>
  );
}

export default App;
