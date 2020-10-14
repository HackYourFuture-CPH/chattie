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
import FooterChatProfile from '../footerChatProfile/FooterChatProfile';

function ProfileDetails({
  profileImage,
  userName,
  email,
  phoneNumber,
  role,
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
    <>
      <div className="profile-blue-area">
        <div className="profile-btn-container">
          <div className="profile-sign-out-btn">
            <SignOutButton />
          </div>
        </div>

        <section className="name-image-container">
          <div className="profile-image-cropper">
            <img
              src={imageUrl || profileImage}
              className="profile-image"
              alt=""
            />
          </div>

          <FontAwesomeIcon
            icon={faCamera}
            className="profile-image-edit-before"
          />

          {editMode ? (
            <>
              <label htmlFor="file">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="profile-image-edit-after"
                />
                <input
                  type="file"
                  className="profile-picture-download"
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
                  className="profile-name-input-change"
                  type="user-name"
                  name="userName"
                  id="userName"
                  placeholder="My Name"
                  value={formDetails.userName}
                  onChange={handleChange}
                  required
                />
              ) : (
                <h2>{formDetails.userName}</h2>
              )}
            </div>

            <div className="profile-user-role">
              <p>{user ? user.role : role}</p>
            </div>

            <div className="user-phone">
              <div className="profile-icon">
                <FontAwesomeIcon icon={faPhoneSquare} />
              </div>
              <div className="phone-info">
                <p> </p>
                {editMode ? (
                  <input
                    className="profile-phone-input-change"
                    type="phoneNumber"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formDetails.phoneNumber}
                    placeholder="+45---"
                    onChange={handleChange}
                    required
                  />
                ) : (
                  <p>{formDetails.phoneNumber}</p>
                )}
              </div>
            </div>

            <section>
              <div className="user-email">
                <div className="profile-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="email-info">
                  <p>{user ? user.email : email}</p>
                </div>
              </div>
            </section>

            <div id="edit-button">
              <button
                className="edit-button"
                type="button"
                onClick={toggleEditMode}
              >
                {editMode ? 'Update' : buttonText}
              </button>
            </div>
          </div>
        </section>
      </div>

      <FooterChatProfile />
    </>
  );
}

export default ProfileDetails;

ProfileDetails.propTypes = {
  email: PropTypes.string,
  user: PropTypes.shape({
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  userName: PropTypes.string,
  profileImage: PropTypes.string,
  phoneNumber: PropTypes.string,
  role: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

ProfileDetails.defaultProps = {
  userName: '',
  profileImage:
    'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png',
  phoneNumber: '',
  buttonText: 'Change',
  email: '',
  role: 'Missing role',
};
