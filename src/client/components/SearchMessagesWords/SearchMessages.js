import React, { useState } from 'react';
import './SearchMessages.css';

function SearchMessages() {
  const [searchTerm, setsearchTerm] = useState('Search');
  const [searchResults, setsearchResults] = useState([]);

  function handleChange(event) {
    setsearchTerm(event.target.value);
  }

  function handleSubmit() {
    fetch(`/api/messages?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setsearchResults(data.messages));
    const filteredResults = setsearchResults.forEach((message) => {
      message.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setsearchResults(filteredResults);
  }

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <p>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </p>
      <ul className="outputList">
        {searchResults.map((messageItem) => (
          <li>{messageItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchMessages;
