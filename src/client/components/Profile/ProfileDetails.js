import React from 'react';
import PropTypes from 'prop-types';
import './Profile.styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope } from '@fortawesome/fontawesome-free-solid';

const ProfileDetails = ({ profile_image, user_name, email }) => (
  <div className="container">
    <section className="name-image-container">
      <img src={profile_image} className="profile-img" alt="users profile" />
      <h2>{user_name}</h2>
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
  </div>
);

export default ProfileDetails;

ProfileDetails.propTypes = {
  user_name: PropTypes.string,
  email: PropTypes.string.isRequired,
  profile_image: PropTypes.string,
};

ProfileDetails.defaultProps = {
  user_name: 'My Name',
  profile_image:
    'https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png',
};
