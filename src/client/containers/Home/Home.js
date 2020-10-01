import React from 'react';
import './Home.styles.css';
import '../../index.css';
import { Link } from 'react-router-dom';
import logoAnna from '../../assets/images/logoAnna.png';

export const Home = () => (
  <section className="home">
    <div className="home-container-logo-buttons">
      <div className="home-img">
        <Link to="/">
          <img
            className="home-logo-anna"
            src={logoAnna}
            alt="The company Anna's logo"
          />
        </Link>
      </div>

      <div className="home-buttons">
        <div>
          <Link to="/sign-up">
            <button
              className="home-button-signup"
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
            <button className="home-button-signin" type="button">
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
