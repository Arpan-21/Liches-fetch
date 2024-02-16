import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from '../src/components/UserProfile.js';
import UserGames from '../src/components/UserGames.js';
import SearchBar from '../src/components/SearchBar.js';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [games, setGames] = useState([]);

  const handleSearch = (searchedUsername) => {
    setUsername(searchedUsername);
    setUserData(null);
    setGames([]);
    fetchUserData(searchedUsername);
    fetchUserGames(searchedUsername);
  };

  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchUserGames = async (username) => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}/current-game`);
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching user games:', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData(username);
      fetchUserGames(username);
    }
  }, [username]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {username && (
        <>
          <UserProfile username={username} />
          <UserGames username={username} />
        </>
      )}
    </div>
  );
}

export default App;
