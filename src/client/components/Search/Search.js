import React, { useState } from 'react';
import { Fetcher } from '../Fetcher/Fetcher';
import { UserDetails } from '../Fetcher/UserDetails';
import './Search.styles.css';

// eslint-disable-next-line react/prop-types
export default function Search({ getUserData }) {
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleCancel = (e) => {
    e.preventDefault();
    setSearch('');
    setIsSearching(false);
  };

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsSearching(true)}
        onBlur={() => (search ? null : setIsSearching(false))}
      />

      {isSearching ? (
        <button
          className="cancelInputSearch"
          type="button"
          onClick={handleCancel}
          href="#"
        >
          {' '}
          Cancel{' '}
        </button>
      ) : null}

      <Fetcher
        search={search}
        getUserData={getUserData}
        render={({ data, error, loading, noUserMatch }) => (
          <div>
            {loading && <div>Loading... </div>}
            {error && <div>Error...</div>}
            {noUserMatch && <div>No results founded</div>}

            {data &&
              data.map((item) => {
                return (
                  <li style={{ listStyleType: 'none' }} key={`${item.login}`}>
                    <UserDetails user={item} />
                  </li>
                );
              })}
          </div>
        )}
      />
    </>
  );
}
