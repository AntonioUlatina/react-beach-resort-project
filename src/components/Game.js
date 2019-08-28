import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/game-placeholder.jpg";
import PropTypes from "prop-types";
import { memo } from "react";

const Game = memo(({ game }) => {
  const { name, slug, images } = game;
  return (
    <article className="game">
      <div className="img-container">
        <Link to={`/game/${slug}`}>
          <img src={images[0] || defaultImg} alt="single game" />
        </Link>
      </div>
      <p className="game-info">{name}</p>
    </article>
  );
});

Game.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    topic: PropTypes.string.isRequired
  })
};
export default Game;
