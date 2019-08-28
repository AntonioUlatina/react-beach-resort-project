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
        {/* end of guests */}
        {/* game topic
        <div className="form-group">
          <label htmlFor="topic">game topic ${topic}</label>
          <input
            type="range"
            name="topic"
            min={minTopic}
            max={maxTopic}
            id="topic"
            value={topic}
            onChange={handleChange}
            className="form-control"
          />
        </div> */}
        {/* end of game topic*/}
        {/* subtopic */}
        {/* <div className="form-group">
          <label htmlFor="topic">game subtopic </label>
          <div className="subtopic-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="subtopic-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="subtopic-input"
            />
          </div>
        </div> */}
        {/* end of select type */}
        {/* extras */}
        {/* <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="reviewCount"
              id="reviewCount"
              checked={reviewCount}
              onChange={handleChange}
            />
            <label htmlFor="reviewCount">reviewCount</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="rating"
              checked={rating}
              onChange={handleChange}
            />
            <label htmlFor="reviewCount">rating</label>
          </div>
        </div> */}
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default GamesFilter;
