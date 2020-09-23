import React from 'react';
import './AddImageToRoom.styles.css';

export default function AddImageToRoom() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (onload) => {
        current.src = onload.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add-image-to-room">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
      />

      <div className="image-container ">
        <div className="button">
          <button type="button" onClick={() => imageUploader.current.click()}>
            +
          </button>
        </div>

        <div className="input-picture">
          <img alt="room_img" ref={uploadedImage} />
        </div>
      </div>
    </div>
  );
}
