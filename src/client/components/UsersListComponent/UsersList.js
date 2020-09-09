import React from 'react';
import PropTypes from 'prop-types';
import './UsersListStyle.css';

export default function Userslist(props) {
  return (
    <div className="container">
      <div className="wraper">
        <h1>Chat</h1>
        <input type="text" />
        <ul>
          {props.people.map((people) => (
            <li key={people}>{people}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Userslist.propTypes = {
  people: PropTypes.arrayOf(PropTypes.string).isRequired,
};
