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
        {members &&
          members.map((member) => {
            return (
              <div>
                <img
                  src={member.imgUrl}
                  alt="member"
                  className="member-information-img"
                />
                <h4>{member.name}</h4>
              </div>
            );
          })}
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
