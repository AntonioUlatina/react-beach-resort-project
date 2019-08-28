import React from "react";
import { withGameConsumer } from "../context";
import GamesFilter from "./GamesFilter";
import GamesList from "./GamesList";

function GameContainer({ context }) {
  console.log("Gcontext: " + context);
  const { loading, sortedGames, games } = context;
  if (loading) {
  }
  return (
    <>
      <GamesFilter games={games} />
      <GamesList games={sortedGames} />
    </>
  );
}

export default withGameConsumer(GameContainer);
