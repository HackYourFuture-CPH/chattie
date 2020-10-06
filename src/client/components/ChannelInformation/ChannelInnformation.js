import React from 'react';
import PropTypes from 'prop-types';
import './ChannelInformation.style.css';

export const RenderChannelInformation = ({
  channelImg,
  channelTitle,
  members,
}) => {
  return (
    <>
      <div className="channel-information-header">
        <img src={channelImg} alt="Room" className="channel-information-img" />
      </div>
      <h3 className="channel-information-title">{channelTitle}</h3>
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
  channelImg: PropTypes.string,
  channelTitle: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.object),
};
RenderChannelInformation.defaultProps = {
  channelImg: 'https://loremflickr.com/320/240',
  channelTitle: 'Room',
  members: [
    { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
    { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
    { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
    { name: 'Member', imgUrl: 'https://loremflickr.com/320/240' },
  ],
};
