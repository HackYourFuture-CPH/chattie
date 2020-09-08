import React from 'react';
import './UsersListStyle.css';
export default function Userslist(props) {
  return (
    <div className="container">
      <div className="wraper">
        <h1>Chat</h1>
        <input type="text" />
        <ul>
          {props.people.map((people, index) => (
            <li key={index}>{people}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
