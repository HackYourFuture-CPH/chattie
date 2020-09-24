import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './SearchMessages.css';

export default function SearchMessages() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch(`/api/messages?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.searchResults));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const results = searchResults.filter((message) =>
      message.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <p>
        <button type="submit">click Me</button>
      </p>
      <ul className="lista">
        {searchResults.map((messageItem) => (
          <li>{messageItem}</li>
        ))}
      </ul>
    </div>
  );
}

SearchMessages.defaultType = {
  searchTerm: PropTypes.func.isRequired,
};
