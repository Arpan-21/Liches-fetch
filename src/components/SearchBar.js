import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
