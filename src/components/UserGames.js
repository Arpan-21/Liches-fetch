import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserGames({ username }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchUserGames = async () => {
      const response = await axios.get(`https://lichess.org/api/user/${username}/current-game`);
      setGames(response.data);
    };

    fetchUserGames();
  }, [username]);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          {game.id} - {game.mode} - {game.status}
        </li>
      ))}
    </ul>
  );
}

export default UserGames;
