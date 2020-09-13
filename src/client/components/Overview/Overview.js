import React from 'react';
import './Overview.styles.css';
import OverviewSearchMessagesBtn from './OverviewSearchMessagesBtn';

function Overview() {
  return (
    <div className="overview">
      <h3 className="chatTitle">Chats</h3>
      <div className="btnAndProfile">
        <OverviewSearchMessagesBtn />
        <p>Profile</p>
      </div>
    </div>
  );
}

export default Overview;
