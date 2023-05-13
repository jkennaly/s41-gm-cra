import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const gamesAsGM = useSelector((state) => state.games.gamesAsGM);
  const gamesAsPlayer = useSelector((state) => state.games.gamesAsPlayer);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/gameslobby">Go to Games Lobby</Link>
        </li>
      </ul>

      <h2>Games as GM:</h2>
      <ul>
        {gamesAsGM.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>

      <h2>Games as Player:</h2>
      <ul>
        {gamesAsPlayer.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
