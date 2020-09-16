import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ChannelHeadNav.style.css';

export default function ChannelHeadNav({ channelName, urlBack, imgUrl }) {
  const backArrow = '<';
  return (
    <div className="channel-head-div">
      <Link to={urlBack} className="channel-head-back-arrow-icon">
        <h2>{backArrow}</h2>
      </Link>
      <img src={imgUrl} alt="Room" className="channel-head-img" />
      <h2 className="channel-head-name">{channelName}</h2>
    </div>
  );
}
ChannelHeadNav.propTypes = {
  channelName: PropTypes.string.isRequired,
  urlBack: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
