import React from "react";
import { useContext } from "react";
import { TopicContext } from "../altcontext";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const TopicsFilter = ({ topics }) => {
  // react hooks
  const context = useContext(TopicContext);
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
  let grades = getUnique(topics, "grade");
  // add all
  grades = ["all", ...grades];
  // map to jsx
  grades = grades.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique category
  let people = getUnique(topics, "category");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search topics" />
      <form className="filter-form">
        {/* select grade */}
        <div className="form-group">
          <label htmlFor="grade">topic grade</label>
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
          <label htmlFor="category">Guests</label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            className="form-control"
            value={category}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* topic topic */}
        <div className="form-group">
          <label htmlFor="topic">topic topic ${topic}</label>
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
        </div>
        {/* end of topic topic*/}
        {/* subtopic */}
        <div className="form-group">
          <label htmlFor="topic">topic subtopic </label>
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
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
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
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default TopicsFilter;
