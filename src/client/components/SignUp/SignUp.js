import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCamera } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
import { useStorage } from '../../hooks/useStorage.js';

export default function SignUp({ onSubmit }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [file, setFile] = useState('');
  const handleNameInput = (e) => setName(e.target.value);
  const handleRoleInput = (e) => setRole(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordConfirmInput = (e) => setPasswordConfirm(e.target.value);
  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      return setFile(selectedFile);
    }
  };
  const { url } = useStorage(file);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      role,
      email,
      phone,
      password,
      passwordConfirm,
      url,
    });
  };
  return (
    <div>
      <div className="sign-up-icon-title">
        <div className="sign-up-icon">
          <Link to="/">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
        </div>

        <div className="sign-up-title">
          <h3>Sign Up</h3>
        </div>
      </div>
      <div className="sign-up-forms">
        <div className="sign-up-image">
          <label className="sign-up-add-image-to-profile">
            <FontAwesomeIcon icon={faCamera} />
            <input
              className="sign-up-image-input"
              type="file"
              name="profileImage"
              accept="image/*"
              multiple={false}
              style={{ display: 'none' }}
              files={file}
              onChange={handleFileInput}
              required
            />
          </label>

          <div className="sign-up-add-image-to-profile-preview">
            {url && <img className="sign-up-image-user" alt="" src={url} />}
          </div>
        </div>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="sign-up">
            <div className="sign-up-name">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleNameInput}
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="role"
                placeholder="Your role"
                value={role}
                onChange={handleRoleInput}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailInput}
                required
              />
            </div>

            <div className="sign-up-phone">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number eg:12345678"
                value={phone}
                pattern="[0-9]{8}"
                onChange={handlePhoneInput}
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
                required
              />
            </div>
            <div className="sign-up-password">
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={handlePasswordConfirmInput}
                required
              />
            </div>
            <div>
              <button className="sign-up-button" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
