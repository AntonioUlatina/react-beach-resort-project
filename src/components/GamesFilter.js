import React from "react";
import { useContext } from "react";
import { GameContext } from "../context";
import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const GamesFilter = ({ games }) => {
  // react hooks
  const context = useContext(GameContext);
  const {
    handleChange,
    grade,
    category,
    topic,
    minTopic,
    maxTopic,
    minSize,
    maxSize,
    reviewCount,
    rating
  } = context;

  // get unique grades
  let grades = getUnique(games, "grade");
  // add all
  // grades = ["Todos", ...grades];
  // map to jsx
  grades = grades.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique topic
  let people = getUnique(games, "topic");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="Libreria de juegos" />
      <form className="filter-form">
        {/* select grade */}
        <div className="form-group">
          <label htmlFor="grade">Grado</label>
          <select
            name="grade"
            id="grade"
            onChange={handleChange}
            className="form-control"
            value={grade}
          >
            {grades}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="topic">Tema</label>
          <select
            name="topic"
            id="topic"
            onChange={handleChange}
            className="form-control"
            value={topic}
          >
            {people}
          </select>
        </div>
      </form>
    </section>
  );
};

export default GamesFilter;
