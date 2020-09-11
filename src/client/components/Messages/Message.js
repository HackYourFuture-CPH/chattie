import React from 'react';

function Message(props) {
  return (
    <div>
      <div>
        {props.username} : {props.text}
      </div>
    </div>
  );
}
export default Message;
