/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const baseUrl = 'https://api.github.com/search/users?q=';

export const Fetcher = ({ search, render }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(search);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`${baseUrl}${encodeURIComponent(search)}`);
      const result = await response.json();

      setLoading(false);

      if (result.error) {
        setError(result);
      } else {
        setData(result.items);
        setError(false);
      }
    };

    if (search !== '') {
      getData();
    } else {
      setError(false);
      setData(false);
    }
  }, [search]);

  return (
    <>
      {render({
        loading,
        data,
        error,
      })}
    </>
  );
};
