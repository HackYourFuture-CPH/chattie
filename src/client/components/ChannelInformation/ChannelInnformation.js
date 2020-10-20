import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid';
import './ChannelInformation.style.css';
import { BrowserRouter, Link } from 'react-router-dom';

export const ChannelInformationComponent = ({
  image,
  title,
  members,
  link,
  onGoToChatBack,
  channelId,
}) => {
  return (
    <>
      <div className="channel-information-header">
        <div
          role="presentation"
          onClick={() => onGoToChatBack(channelId)}
          className="channel-information-back"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <img src={image} alt="Room" className="channel-information-img" />
        <div className="channel-information-links">
          <BrowserRouter>
            <Link className="channel-information-edit-button" to={link}>
              Edit
            </Link>
          </BrowserRouter>
        </div>
      </div>
      <h3 className="channel-information-title">{title}</h3>
      <div className="channel-information-main">
        <h3>Members</h3>
        <ul>
          {members &&
            members.map((member) => {
              return (
                <li key={member.id}>
                  <img
                    src={member.profileImage}
                    alt="member"
                    className="member-information-img"
                  />
                  <h4>{member.userName}</h4>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
ChannelInformationComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.string,
  channelId: PropTypes.string.isRequired,
  onGoToChatBack: PropTypes.func.isRequired,
};
ChannelInformationComponent.defaultProps = {
  image: '',
  title: '',
  members: [],
  link: '',
};
