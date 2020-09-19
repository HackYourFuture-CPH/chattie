import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';
import { UserContext } from '../../context/userContext';

const Message = (props) => {
  return (
    <UserContext.Consumer>
      {(user) => {
        const currentUserId = user ? user.id === props.message.id : '';
        return (
          <div className="chat-message__container">
            <p
              className={`chat-message__text ${currentUserId &&
                'chat-message__receiver'}`}
            >
              {props.message.message}
            </p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};
Message.propTypes = {
  message: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Message;
