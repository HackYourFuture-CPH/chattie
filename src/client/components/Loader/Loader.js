import React from 'react';
import PropTypes from 'prop-types';
import './Loader.styles.css';

export default function Loader({ loadingText }) {
  return <div className="loading">{loadingText}</div>;
}

Loader.defaultProps = {
  loadingText: 'Loading...',
};

Loader.propTypes = {
  loadingText: PropTypes.string,
};
