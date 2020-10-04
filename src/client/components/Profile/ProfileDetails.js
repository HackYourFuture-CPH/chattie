import React from 'react';
import PropTypes from 'prop-types';
import './Profile.styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope } from '@fortawesome/fontawesome-free-solid';

const ProfileDetails = ({ profileImage, userName, email }) => (
  <>
    <section className="name-image-container">
      <img src={profileImage} className="profile-img" alt="users profile" />
      <h2>{userName}</h2>
      <p>Professional role</p>
    </section>
    <section className="users-information-container">
      <div className="user-email">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="email-info">
          <p>Email:</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="user-phone">
        <div className="icon">
          <FontAwesomeIcon icon={faPhoneSquare} />
        </div>
        <div className="phone-info">
          <p> Phone:</p>
          <p>+45 -- -- -- --</p>
        </div>
      </div>
    </section>
  </>
);

export default ProfileDetails;

ProfileDetails.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
};

ProfileDetails.defaultProps = {
  userName: 'My Name',
  profileImage:
    'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png',
};
