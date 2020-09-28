import React from 'react';
import MessageList from '../../components/MessageList/MessageList';
import PropTypes from 'prop-types';

function ChannelMessagesView(props) {

  return (
    <ul className="container">
      {props.messages &&
        <MessageList messages={props.messages} />
      }
    </ul>
  );
}

ChannelMessagesView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default ChannelMessagesView;
