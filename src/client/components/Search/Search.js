import React, { useState } from 'react';
import { Fetcher } from '../Fetcher/Fetcher';
import { UserDetails } from '../Fetcher/UserDetails';
import { UserProfileImage } from '../Fetcher/UserProfileImage';
import './Search.styles.css';

export default function Search() {
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
          Cancel
        </button>
      ) : null}

      <Fetcher
        search={search}
        render={({ data, error, loading, noUserMatch }) => (
          <div>
            {loading && <div>Loading... </div>}
            {error && <div>Error...</div>}
            {noUserMatch && <div>No users found</div>}

            {data &&
              data.map((user) => {
                return (
                  <li
                    style={{ listStyleType: 'none' }}
                    className="userListInSearch"
                    key={`${user.user_name}`}
                  >
                    <UserProfileImage user={user.profile_image} />
                    <UserDetails user={user.user_name} />
                  </li>
                );
              })}
          </div>
        )}
      />
    </>
  );
}
