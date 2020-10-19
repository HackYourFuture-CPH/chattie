import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RoomLink = (props) => {
  const { id, title, imageUrl } = props;
  return (
    <>
      <Link to={`/channels/${id}`}>
        <li key={id} className="room-list">
          <img src={imageUrl} alt="" className="room-img" />
          {title}
        </li>
      </Link>
    </>
  );
};
RoomLink.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};
RoomLink.defaultProps = {
  title: '',
  imageUrl: '',
};

export default RoomLink;
