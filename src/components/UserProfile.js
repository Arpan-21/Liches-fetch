import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setUserData(response.data);
      console.log(response.data);
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>fetched UserName : {userData.username}</h1>
      <p>Blitz Rating: {userData.perfs.blitz.rating}</p>
    </div>
  );
}

export default UserProfile;
