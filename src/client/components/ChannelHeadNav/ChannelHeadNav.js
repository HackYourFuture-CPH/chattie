import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ChannelHeadNav.style.css';

export default function ChannelHeadNav({
  channelName,
  urlBack,
  imgUrl,
  channelId,
}) {
  const backArrow = '<';
  return (
    <div className="channel-head-navigation">
      <Link to={urlBack} className="channel-head-back-arrow-icon">
        <h2>{backArrow}</h2>
      </Link>
      <img src={imgUrl} alt="Room" className="channel-head-img" />
      <h3 className="channel-head-name">{channelName}</h3>
      <button
        type="button"
        className="channel-information-button"
        onClick={() => {
          location.replace(`./channels/${channelId}/about`);
        }}
      >
        i
      </button>
    </div>
  );
}
ChannelHeadNav.propTypes = {
  channelName: PropTypes.string.isRequired,
  urlBack: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  channelId: PropTypes.number.isRequired,
};
