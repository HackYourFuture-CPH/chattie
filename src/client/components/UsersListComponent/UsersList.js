import React from 'react';
import PropTypes from 'prop-types';
import './UsersListStyle.css';

export default function Userslist(props) {
  return (
    <div className="container">
      <div className="wraper">
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
