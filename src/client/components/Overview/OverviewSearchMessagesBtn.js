import React, { useState, useEffect } from 'react';

function messagesRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function OverviewSearchMessagesBtn() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      messagesRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <button
      className="OverviewSearchMessagesBtn"
      isLoading={isLoading}
      type="submit"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Chats'}
    </button>
  );
}

export default OverviewSearchMessagesBtn;
