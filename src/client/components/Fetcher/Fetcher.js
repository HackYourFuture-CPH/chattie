import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const baseUrl = '';

async function getUserData(search) {
  const response = await fetch(`${baseUrl}${encodeURIComponent(search)}`);
  const result = await response.json();
  return result;
}

export const Fetcher = ({ search, render }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(search);
  const [error, setError] = useState('');
  const [noUserMatch, setNoUserMatch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const result = await getUserData(search);

      setLoading(false);

      if (result.message) {
        setError(result.message);
      } else {
        setData(result.items);
        setError(false);
        setNoUserMatch(false);
      }

      if (result.items.length === 0) {
        setNoUserMatch(true);
      } else {
        setData(result.items);
        setError(false);
        setNoUserMatch(false);
      }
    };

    if (search !== '' && search.length >= 2) {
      getData();
    } else {
      setError(false);
      setData(false);
      setNoUserMatch(false);
    }
  }, [search]);

  return (
    <>
      {render({
        loading,
        data,
        error,
        noUserMatch,
      })}
    </>
  );
};

Fetcher.propTypes = {
  render: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};
