import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faInfo } from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';
import './ChannelHeadNav.style.css';

export default function ChannelHeadNav({
  channelName,
  urlBack,
  imgUrl,
  channelId,
}) {
  return (
    <div className="channel-head-navigation">
      <div className="channel-info">
        <div className="navigation-icon">
          <Link to={urlBack}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
        </div>
        <img src={imgUrl} alt="Room" className="channel-head-img" />
        <h3 className="channel-head-name">{channelName}</h3>
      </div>
      <FontAwesomeIcon
        icon={faInfo}
        type="button"
        className="channel-information-button"
        onClick={() => {
          location.replace(`./channel/${channelId}/about`);
        }}
      />
    </div>
  );
}
ChannelHeadNav.propTypes = {
  channelName: PropTypes.string.isRequired,
  urlBack: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  channelId: PropTypes.number.isRequired,
};

ChannelHeadNav.defaultProps = {
  imgUrl:
    'https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png',
};
