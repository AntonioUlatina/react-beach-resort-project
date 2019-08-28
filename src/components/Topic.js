import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

const Topic = memo(({ tempTopic }) => {
  const { slug, grade, topic } = tempTopic;
  console.log(slug + " " + grade + " " + topic);
  return (
    <article>
      <div>
        <h6>${topic}</h6>
        <p>per night</p>
      </div>
      <Link to={`/tempTopics/${slug}`}>features</Link>
      <p>{grade}</p>
    </article>
  );
});

Topic.propTypes = {
  topic: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    topic: PropTypes.number.isRequired
  })
};
export default Topic;
