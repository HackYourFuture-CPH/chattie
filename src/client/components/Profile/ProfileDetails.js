import React from 'react';
import PropTypes from 'prop-types';
import './Profile.styling.css';
import 'font-awesome/css/font-awesome.min.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

dom.watch();
library.add(faUser, faPhoneAlt, faEnvelope);

const ProfileDetails = ({ profile_image, user_name, email }) => (
  <div className="container">
    <section className="name-image-container">
      <img src={profile_image} className="profile-img" alt="users profile" />
      <i className="fas fa-user" />
      <h2>{user_name}</h2>
      <p>My role is</p>
    </section>
    <section className="users-information-container">
      <h3>Your contact details</h3>
      <div className="user-email">
        <i className="fas fa-envelope" />
        <p>Email: {email}</p>
      </div>
      <div className="user-phone">
        <i className="fas fa-phone-alt" />
        <p>Phone:</p>
      </div>
    </section>
  </div>
);

export default ProfileDetails;

ProfileDetails.propTypes = {
  user_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  profile_image: PropTypes.string.isRequired,
};
