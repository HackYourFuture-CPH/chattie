import React from 'react';
import { Link } from 'react-router-dom';
import './EditRoom.style.css';

const RoomLink = (prop) => {
  const { id, title, imgUrl } = prop;
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

export default RoomLink;
