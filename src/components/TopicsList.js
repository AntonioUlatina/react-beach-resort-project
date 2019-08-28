import React from "react";
import Topic from "./Topic";
const TopicsList = ({ topics }) => {
  if (topics.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no topics matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="topicslist">
      <div className="topicslist-center">
        {topics.map(item => {
          return <Topic key={item.id} topic={item} />;
        })}
      </div>
    </section>
  );
};

export default TopicsList;
