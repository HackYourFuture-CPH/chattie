import React, { useState, useEffect } from 'react';
import './AddImageToRoom.styles.css';
import { useStorage } from '../../hooks/useStorage';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

export default function AddImageToRoom({ onUpload }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useStorage(file);

  useEffect(() => onUpload(url), [onUpload, url]);
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

  return (
    <div className="add-image-to-room">
      <label className="add-image-to-room-label">
        <FontAwesomeIcon icon={faImage} />
        <input
          className="add-image-to-room-input-file"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </label>
      {error && <p>{error}</p>}
      <div className="add-image-to-room-image-preview">
        {url && <img alt="room-img" src={url} />}
      </div>
    </div>
  );
}

AddImageToRoom.propTypes = {
  onUpload: PropTypes.func.isRequired,
};
