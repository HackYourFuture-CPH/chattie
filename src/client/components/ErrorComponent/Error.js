import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Error.styles.css';

const Error = ({ children }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>
          <span className="red"> 4</span> <FontAwesomeIcon icon="cogs" />{' '}
          <span className="red"> 4</span>{' '}
        </h1>
        <h2> {children} </h2>
        <Link to="/overview">
          <button type="button">Click to go home !</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
