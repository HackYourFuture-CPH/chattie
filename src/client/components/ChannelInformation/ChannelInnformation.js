import React from 'react';
import PropTypes from 'prop-types';
import './ChannelInformation.style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

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
      </div>
      <h3 className="channel-information-title">{title}</h3>
      <div className="channel-information-edit-button">
        <BrowserRouter>
          <Link to={link}>Edit</Link>
        </BrowserRouter>
      </div>
      <div className="channel-information-main">
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
};
ChannelInformationComponent.defaultProps = {
  image: '',
  title: '',
  members: [],
  link: '',
};
