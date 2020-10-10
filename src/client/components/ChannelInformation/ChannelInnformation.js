import React from 'react';
import PropTypes from 'prop-types';
import './ChannelInformation.style.css';

export const RenderChannelInformation = ({ image, title, members }) => {
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
                    src={member.profile_image}
                    alt="member"
                    className="member-information-img"
                  />
                  <h4>{member.user_name}</h4>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
RenderChannelInformation.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.object),
};
RenderChannelInformation.defaultProps = {
  image: '',
  title: '',
  members: [],
};
