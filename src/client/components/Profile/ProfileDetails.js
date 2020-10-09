import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Profile.styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignOutButton from '../SignOut/SignOut';
import {
  faPhoneSquare,
  faEnvelope,
  faCamera,
} from '@fortawesome/fontawesome-free-solid';
import { useStorage } from '../../hooks/useStorage';

function ProfileDetails({
  profileImage,
  userName,
  email,
  phoneNumber,
  handleSubmit,
  buttonText,
  user,
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
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

  const imageUrl = useStorage(file).url;

  function toggleEditMode() {
    /* To save user information if editMode=true */
    if (editMode) {
      handleSubmitChange();
      setEditMode(false);
    } else setEditMode(true);
  }
  function handleChange(event) {
    return setFormDetails({
      ...formDetails,
      [event.target.id]: event.target.value,
      profileImage: imageUrl,
    });
  }

  function handleSubmitChange() {
    const changeFormDetails =
      formDetails.profileImage === null
        ? {
            userName: formDetails.userName,
            phoneNumber: formDetails.phoneNumber,
          }
        : formDetails;
    handleSubmit(changeFormDetails);
  }

  return (
    <div className="profile-details-container">
      <section className="sign-out-btn">
        <SignOutButton />
      </section>
      <section className="name-image-container">
        <img
          src={imageUrl || profileImage}
          className="profile-image"
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
                placeholder={imageUrl}
              />
            </label>
          </>
        ) : null}
        {error && <p>{error}</p>}
        <div className="name-edit-btn">
          <div className="user-name">
            {editMode ? (
              <input
                type="user-name"
                name="userName"
                id="userName"
                value={formDetails.userName}
                onChange={handleChange}
                required
              />
            ) : (
              <h2>{formDetails.userName}</h2>
            )}
          </div>
          <div id="edit-button" className="edit-name">
            <button type="button" onClick={toggleEditMode}>
              {editMode ? 'Update' : buttonText}
            </button>
          </div>
        </div>
        <p>Professional role</p>
      </section>
      <section className="users-information-container">
        <div className="user-email">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="email-info">
            <p>Email: {user ? user.email : email}</p>
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
  email: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  userName: PropTypes.string,
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
  buttonText: 'edit',
};
