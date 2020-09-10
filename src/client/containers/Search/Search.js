import React, { useState } from 'react';
import { Fetcher } from '../../components/SearchAPI/Fetcher';
import { UserDetails } from '../../components/SearchAPI/UserDetails';
import './Styles.css';

export const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Fetcher
        search={search}
        render={({ data, error, loading }) => (
          <div>
            {loading && <div>Loading... </div>}
            {error && <div>No results</div>}

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
};
