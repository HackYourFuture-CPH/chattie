import React from 'react';
import './Home.styles.css';
import '../../index.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-useless-path-segments
import logoAnna from '../../../client/assets/images/logoAnna.png';

export const Home = () => (
  <section className="home">
    <div className="home-container-logo-buttons">
      <div className="home-img">
        <Link to="/">
          <img className="home-logoAnna" src={logoAnna} alt="logo-anna" />
        </Link>
      </div>

      <div className="home-buttons">
        <div>
          <Link to="/sign-up">
            <button
              className="home-buttonSignUp"
              path
              to="/sign-up"
              type="button"
            >
              Sign up
            </button>
          </Link>
        </div>

        <div>
          <Link to="/sign-in">
            <button className="home-buttonSignIn " type="button">
              Sign in
            </button>
          </Link>
        </div>

        <div className="home-hyf-text">
          <p>Built by students from HackYourFuture</p>
        </div>
      </div>
    </div>
  </section>
);
