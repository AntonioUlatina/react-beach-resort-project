import React from "react";
import { withGameConsumer } from "../context";
import Loading from "./Loading";
import GamesFilter from "./GamesFilter";
import GamesList from "./GamesList";

function GameContainer({ context }) {
  console.log("Gcontext: " + context);
  const { loading, sortedGames, games } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GamesFilter games={games} />
      <GamesList games={sortedGames} />
    </>
  );
}

export default withGameConsumer(GameContainer);

// import React from "react";
// import { GameConsumer } from "../context";
// import Loading from "./Loading";
// import GamesFilter from "./GamesFilter";
// import GamesList from "./GamesList";
// export default function GameContainer() {
//   return (
//     <GameConsumer>
//       {value => {
//         const { loading, setGame, sortedGames,games } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <GamesFilter games={games} />
//             <GamesList games={sortedGames} setGame={setGame} />
//           </>
//         );
//       }}
//     </GameConsumer>
//   );
// }
