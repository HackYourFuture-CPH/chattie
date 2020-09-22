import React from 'react';

import './AddImageToRoom.styles.css';

export default function AddImageToRoom() {
  return (
    <div className="add-image-to-room">
      <input type="file" accept="image/*" multiple="false" />
    </div>
  );
}
