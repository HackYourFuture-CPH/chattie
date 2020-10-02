// import React from 'react';
import './AddImageToRoom.styles.css';
import React, { useState } from 'react';
import { useStorage } from '../../hooks/useStorage';

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
      <div className="add-image-to-room">
        <label className="add-image-to-room-label">
          +
          <input
            className="add-image-to-room-input-file"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>

        {error && <p>{error}</p>}
        <div className="add-image-to-room_image-preview">
          {url && <img alt="room-img" src={url} />}
        </div>
      </div>
    </div>
  );
}
