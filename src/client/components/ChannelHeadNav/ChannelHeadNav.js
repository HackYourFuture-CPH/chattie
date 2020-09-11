import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ChannelHeadNav.style.css';

export default function ChannelHeadNav({ channelName, urlBack, imgUrl }) {
  const backArow = '<';
  return (
    <div className="channel-head-div">
      <Link to={urlBack} className="backArrowIcon">
        <h1>{backArow}</h1>
      </Link>
      <img src={imgUrl} alt="Room" className="channel-head-img" />
      <h2 className="channel-Head-name">{channelName}</h2>
    </div>
  );
}
ChannelHeadNav.propTypes = {
  channelName: PropTypes.string.isRequired,
  urlBack: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
