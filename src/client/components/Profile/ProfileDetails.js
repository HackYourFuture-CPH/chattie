import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Profile.styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSquare,
  faEnvelope,
  faCamera,
} from '@fortawesome/fontawesome-free-solid';
import { useStorage } from '../../hooks/useStorage';

function ProfileDetails({
  profileImage,
  email,
  userName,
  phoneNumber,
  handleSubmit,
  buttonText,
}) {
  const [editMode, setEditMode] = useState(false);
  const [formDetails, setFormDetails] = useState({
    profileImage,
    userName,
    phoneNumber,
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
        // setFormDetails.profileImage(url);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

  const { url } = useStorage(file);

  function handleEditMode() {
    if (editMode) {
      handleSubmit(formDetails);
      setEditMode(false);
    } else setEditMode(true);
  }
  function handleChange(event) {
    return setFormDetails({
      ...formDetails,
      [event.target.id]: event.target.value,
      profileImage: url,
    });
  }
  return (
    <div className="container">
      <section className="name-image-container">
        <img
          src={url || profileImage}
          // src={formDetails.photoUrl}
          className="profile-img"
          alt="users profile"
        />
        {editMode ? (
          <>
            <label htmlFor="file">
              <FontAwesomeIcon icon={faCamera} />
              <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                // onChange={(e) => console.log(e.target.file)}
              />
            </label>
          </>
        ) : null}
        {error && <p>{error}</p>}
        <div className="user-name">
          {editMode ? (
            <input
              type="user-name"
              name="userName"
              id="userName"
              onChange={handleChange}
              required
            />
          ) : (
            <h2>{formDetails.userName}</h2>
          )}
        </div>
        <div id="edit-button" className="edit-name">
          <button type="button" onClick={handleEditMode}>
            {editMode ? 'Update' : buttonText}
          </button>
        </div>
        <p>Professional role</p>
      </section>
      <section className="users-information-container">
        <div className="user-email">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="email-info">
            <p>Email: {email}</p>
          </div>
        </div>
        <div className="user-phone">
          <div className="icon">
            <FontAwesomeIcon icon={faPhoneSquare} />
          </div>
          <div className="phone-info">
            <p> Phone: </p>
            {editMode ? (
              <input
                type="phoneNumber"
                name="phoneNumber"
                id="phoneNumber"
                value={formDetails.phoneNumber}
                onChange={handleChange}
                required
              />
            ) : (
              <p>{formDetails.phoneNumber}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileDetails;

ProfileDetails.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  profileImage: PropTypes.string,
  phoneNumber: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

ProfileDetails.defaultProps = {
  userName: 'My Name',
  profileImage:
    'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png',
  phoneNumber: '+45---',
  email: 'email',
  buttonText: 'edit',
};
