import React from 'react';
import './FooterChatProfile.styles.css';

export default function FooterChatProfole() {
  return (
    <div className="footer-chat-profile">
      <div className="title-dot">
        <a className="overview-active-link" href="/Overview">
          Chats
        </a>
        <span className="chat-dot"> </span>
      </div>
      <div className="title-dot">
        <a href="/profile">Profile</a>
        <span className="chat-dot white-dot"> </span>
      </div>
    </div>
  );
}
