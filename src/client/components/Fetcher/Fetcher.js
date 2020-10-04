import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchWithAuth from '../../utils/fetchWithAuth';

const baseUrl = `/api/users?userName=`;

async function getUserData(search) {
  const result = await fetchWithAuth(`${baseUrl}${encodeURIComponent(search)}`);
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

      if (result.error) {
        setError(true);
      } else {
        setData(result.user);
        setError(false);
        setNoUserMatch(false);
      }

      if (result.length === 0) {
        setNoUserMatch(true);
      } else {
        setData(result);
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
  render: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
