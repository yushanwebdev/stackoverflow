import { useState } from "react";
import "./App.css";

const App = ({ actions }) => {
  const [players, setPlayers] = useState({ player1: 20, player2: 20 });
  const [count, setCount] = useState(0);

  const handleActions = () => {
    let processPlayer = players;
    let finalCount = count;

    actions.forEach((player) => {
      const count = processPlayer[player.takeFrom] - player.amount;
      const maxAmount = Math.min(player.amount, processPlayer[player.takeFrom]);

      finalCount += maxAmount;
      processPlayer[player.takeFrom] = count >= 0 ? count : 0;
    });

    setPlayers({
      player1: processPlayer.player1,
      player2: processPlayer.player2
    });

    setCount(finalCount);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ul>
        {Object.entries(players).map(([playerId, points]) => (
          <li key={playerId}>
            {playerId}: {points}
          </li>
        ))}
      </ul>
      <button onClick={handleActions}>Perform actions</button>
    </div>
  );
};

export default App;