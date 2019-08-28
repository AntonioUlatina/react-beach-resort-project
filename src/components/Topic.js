import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

const Topic = memo(({ tempTopics }) => {
  // const { slug, grade, topic } = tempTopics;
  // console.log(slug + " " + grade + " " + topic);
  // return (
  //   <article>
  //     <div>
  //       <h6>{topic}</h6>
  //     </div>
  //     <Link to={`/tempTopics/`}>Temas</Link>
  //     <p>{grade}</p>
  //   </article>
  // );
});

// Topic.propTypes = {
//   topic: PropTypes.shape({
//     slug: PropTypes.string.isRequired,
//     grade: PropTypes.string.isRequired,
//     topic: PropTypes.number.isRequired
//   })
// };
export default Topic;
