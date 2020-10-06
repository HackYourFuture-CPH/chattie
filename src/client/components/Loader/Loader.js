import React from 'react';
import './Loader.styles.css';

export default function Loader() {
  return (
    <div className="container">
      <div className="canvas">
        <div className="hour-glass"> </div>
      </div>
    </div>
  );
}
