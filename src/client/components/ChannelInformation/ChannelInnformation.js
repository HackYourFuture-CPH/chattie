import React from 'react';
import PropTypes from 'prop-types';
import './ChannelInformation.style.css';

export const ChannelInformationComponent = ({ image, title, members }) => {
  return (
    <>
      <div className="channel-information-header">
        <img src={image} alt="Room" className="channel-information-img" />
      </div>
      <h3 className="channel-information-title">{title}</h3>
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
};
ChannelInformationComponent.defaultProps = {
  image: '',
  title: '',
  members: [],
};
