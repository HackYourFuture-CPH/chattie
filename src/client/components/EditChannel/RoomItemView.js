import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const RoomItemView = (props) => {
  const { id } = useParams();
  const { channels } = props;
  const channel = channels.filter((Channel) => Channel.id === parseInt(id, 10));
  const { title, imageUrl } = channel[0];
  return (
    <>
      <div className="room-view">
        <img src={imageUrl} className="room-img" alt="" />
        <li className="room-item-view">{title}</li>
      </div>
      <Link
        to={{ pathname: `/channels/${id}/edit`, roomItemEditProps: channel }}
      >
        <button type="button">Edit</button>
      </Link>
    </>
  );
};
RoomItemView.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ).isRequired,
};
export default RoomItemView;
