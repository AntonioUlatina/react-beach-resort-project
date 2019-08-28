import React from "react";
import { withTopicConsumer } from "../altcontext";
import TopicsList from "./TopicsList";

function TopicContainer({ context }) {
  const { topics } = context;
  return (
    <>
      <TopicsList topics={topics} />
    </>
  );
}

export default withTopicConsumer(TopicContainer);
