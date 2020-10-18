import React from 'react';
import './EditRoom.style.css';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const RoomItemView = (props) => {
  const { id } = useParams();
  const { channels } = props;
  const channel = channels.filter((Channel) => Channel.id === parseInt(id, 10));
  const { title } = channel[0];
  return (
    <>
      <li className="room-item-view">{title}</li>
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
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default RoomItemView;
