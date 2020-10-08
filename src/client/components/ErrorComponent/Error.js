import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Error.styles.css';

const Error = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>
          <span className="red"> 4</span> <FontAwesomeIcon icon="cogs" />{' '}
          <span className="red"> 4</span>{' '}
        </h1>
        <h2> ERROR. Sorry page was not found </h2>
        <Link to="/overview">
          <button type="button">Click to go home !</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
