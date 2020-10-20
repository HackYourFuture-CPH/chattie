import React, { useState } from 'react';
import fetchWithAuth from '../../utils/fetchWithAuth';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/fontawesome-free-solid';
import { useStorage } from '../../hooks/useStorage';

const RoomItemEdit = (props) => {
  const channel = props.location.roomItemEditProps[0];
  const { id, title, imageUrl } = channel;
  const [roomTitle, setRoomTitle] = useState(title);
  const [file, setFile] = useState(null);
  const imageUrlFire = useStorage(file).url;
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setFile(selectedFile);
      }
    }
  };

  const roomInputData = {
    title: roomTitle,
    imageUrl: imageUrlFire || imageUrl,
  };
  const handleEditRoom = {
    method: 'PATCH',
    body: JSON.stringify(roomInputData),
  };
  const onEdit = async () => {
    await fetchWithAuth(`/api/channels/${id}`, handleEditRoom);
  };

  return (
    <div className="edit-room">
      <form onSubmit={onEdit}>
        <img src={imageUrlFire || imageUrl} className="room-img" alt="" />
        <label htmlFor="file">
          <FontAwesomeIcon icon={faCamera} />
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            placeholder={imageUrlFire || imageUrl}
          />
        </label>
        <input
          type="text"
          placeholder={channel.title}
          onChange={(event) => setRoomTitle(event.target.value)}
        />
        <Link to="/channels">
          <button
            type="submit"
            onClick={() => onEdit(id, roomTitle, imageUrlFire, imageUrl)}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};
RoomItemEdit.propTypes = {
  location: PropTypes.shape({
    roomItemEditProps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        imageUrl: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};
export default RoomItemEdit;
