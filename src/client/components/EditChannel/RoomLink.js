import React from 'react';
import { Link } from 'react-router-dom';
import './EditRoom.style.css';
import PropTypes from 'prop-types';

const RoomLink = (props) => {
  const { id, title, imgUrl } = props;
  return (
    <>
      <Link to={`/channels/${id}`}>
        <li key={id} className="room-list">
          <img src={imgUrl} alt="" className="room-img" />
          {title}
        </li>
      </Link>
    </>
  );
};
RoomLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default RoomLink;
