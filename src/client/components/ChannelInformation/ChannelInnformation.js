import React from 'react';
import PropTypes from 'prop-types';
import './ChannelInformation.style.css';
import { BrowserRouter, Link } from 'react-router-dom';
import FooterChatProfile from '../footerChatProfile/FooterChatProfile';

export const ChannelInformationComponent = ({
  image,
  title,
  members,
  link,
}) => {
  return (
    <>
      <div className="channel-information-header">
        <img src={image} alt="Room" className="channel-information-img" />
        <div className="channel-information-links">
          <BrowserRouter>
            <Link className="channel-information-edit-button" to={link}>
              Edit
            </Link>
          </BrowserRouter>
        </div>
      </div>
      <h2 className="channel-information-title">{title}</h2>
      <div className="channel-information-main">
        <h5>Members:</h5>
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

      <FooterChatProfile />
    </>
  );
};
ChannelInformationComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.string,
};
ChannelInformationComponent.defaultProps = {
  image: '',
  title: '',
  members: [],
  link: '',
};
