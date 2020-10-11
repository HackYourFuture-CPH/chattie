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
      <div className="search-button">
        <div className="search-input">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsSearching(true)}
            onBlur={() => (search ? null : setIsSearching(false))}
          />
        </div>
        <div className="search-button">
          {isSearching ? (
            <button
              className="cancel-input-in-search"
              type="button"
              onClick={handleCancel}
              href="#"
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>

      <Fetcher
        search={search}
        render={({ data, error, loading, noUserMatch }) => (
          <div className="user-details">
            {loading && <div>Loading... </div>}
            {error && <div>Error...</div>}
            {noUserMatch && <div>No users found</div>}

            {data &&
              data.map((user) => {
                return (
                  <li
                    style={{ listStyleType: 'none' }}
                    className="user-list-in-search"
                    key={`${user.user_name}`}
                  >
                    <div className="search-user-render">
                      <UserProfileImage
                        user={
                          <img
                            src={user.profile_image}
                            className="search-image"
                            alt=""
                          />
                        }
                      />
                      <UserDetails user={user.user_name} />
                    </div>
                  </li>
                );
              })}
          </div>
        )}
      />
    </>
  );
}
