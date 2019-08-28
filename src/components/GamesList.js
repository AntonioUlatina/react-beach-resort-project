import React from "react";
import Game from "./Game";
const GamesList = ({ games }) => {
  if (games.length === 0) {
    return (
      <div className="empty-search">
        <h3>No hay juegos para este tema! :(</h3>
      </div>
    );
  }
  return (
    <section className="gameslist">
      <div className="gameslist-center">
        {games.map(item => {
          return <Game key={item.id} game={item} />;
        })}
      </div>
    </section>
  );
};

export default GamesList;
