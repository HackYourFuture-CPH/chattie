import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import fetchWithAuth from '../../utils/fetchWithAuth';

export default function DeleteMessageBtn({ id }) {
  const deleteMessage = async () => {
    const url = 'api/messages/';
    await fetchWithAuth(`${url}${id.messageId}`, {
      method: 'DELETE',
    });
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (
          // eslint-disable-next-line no-alert
          window.confirm('Are you sure you want to delete this message') ===
          true
        )
          deleteMessage();
      }}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

DeleteMessageBtn.propTypes = {
  id: PropTypes.shape({ messageId: PropTypes.string }).isRequired,
};
