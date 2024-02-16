import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserGames({ username }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchUserGames = async () => {
      const response = await axios.get(`https://lichess.org/api/user/${username}/current-game`);
      setGames(response.data);
      console.log(response.data);
    };

    fetchUserGames();
  }, [username]);


  return (
    <>
      <h3>
        Current Game status:
      </h3>
      <li>
        Game ID: {games.id}
      </li>
      <li>
        Game played: {games.perf}
      </li>
      <li>
        Game Status: {games.status}
      </li>
    </>
  );
}

export default UserGames;
