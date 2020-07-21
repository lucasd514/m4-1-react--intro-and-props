import React from "react";
import "./ChatMessage.css";
const ChatMessage = ({ user, body, messageType }) => {
  return messageType === "sent" ? (
    <SentMessage body={body} />
  ) : (
    <ReceivedMessage user={user} body={body} />
  );
};
const SentMessage = ({ body }) => {
  return (
    <div className="chat-message sent">
      <div className="chat-text  ">
        <span className="chat-body sent-text">{body}</span>
      </div>
    </div>
  );
};
const ReceivedMessage = ({ user, body }) => {
  return (
    <div className="chat-message ">
      <img className="user-avatar" src={user.avatar} />
      <div className="chat-text received">
        <span className="user-name">{user.username}</span>
        <span className="chat-body received-text">{body}</span>
      </div>
    </div>
  );
};
export default ChatMessage;
