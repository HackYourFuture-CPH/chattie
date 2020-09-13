import React from 'react';
import PropTypes from 'prop-types';
import './Footer.styles.css';

export default function Loader({ loadingText }) {
  return <div className="loading">{loadingText}</div>;
}

Loader.defaultProps = {
  loadingText: 'Loading...',
};

Loader.propTypes = {
  loadingText: PropTypes.string,
};
