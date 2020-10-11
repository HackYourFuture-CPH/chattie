/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

export default function DeleteMessageBtn(messageId) {
  const deleteMessage = () => {
    return console.log('after delete confirmed', messageId);
  };
  return (
    <button
      type="button"
      onClick={() => {
        if (
          window.confirm('Are you sure you want to delete this message') ===
          true
        )
          return deleteMessage();
      }}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

// DeleteMessageBtn.propTypes = {
//   messageId: PropTypes.string,
// };

DeleteMessageBtn.defaultProps = {
  messageId: '1',
};
