// import React from 'react';
import './AddImageToRoom.styles.css';
import React, { useState } from 'react';
import { useStorage } from '../../hooks/useStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/fontawesome-free-solid';

export default function AddImageToRoom() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };
  const { url } = useStorage(file);

  return (
    <div>
      <label className="new-room-add-image-to-room">
        <FontAwesomeIcon
          className="new-room-add-image-to-room-icon"
          icon={faCamera}
        />
        <input
          type="file"
          name="newRoomImage"
          accept="image/*"
          multiple={false}
          style={{ display: 'none' }}
          files={file}
          onChange={handleImageUpload}
          required
        />
      </label>
      {error && <p>{error}</p>}

      <div className="new-room-add-image-to-room-preview">
        {url && <img className="new-room-image-room" alt="" src={url} />}
      </div>
    </div>
  );
}
