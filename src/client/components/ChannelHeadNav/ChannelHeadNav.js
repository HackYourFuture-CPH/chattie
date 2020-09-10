import React from 'react';
import { Link } from 'react-router-dom';

export default function(channelObj, urlBack) {
  return (
    <div>
      <Link to={urlBack}>Back</Link>
      <img src={channelObj.imgUrl} alt="" />
      <h2>{channelObj.name}</h2>
    </div>
  );
}
