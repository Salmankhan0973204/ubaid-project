import React from "react";
import "./Notification.css";
import AvtarLogo from "../assets/images/avatar-nathan-peterson.webp";

const Notification = (props) => {
  return (
    <div className="main">
      <div className="header">
        <h1>
          Notifications
          <span></span>
        </h1>

        <p className="mark-as-read">Mark all as read</p>
      </div>

      <div className="read unread">
        <div className="card-top">
          <img src={props.img} alt={AvtarLogo} />
          <div className="article">
            <h3>
              <span>{props.comments}</span>
              <span>reacted to your recent post</span>
              <span>My first tournament today!</span>
              <span className="dot"></span>
            </h3>
            <p>1m ago</p>
          </div>
        </div>

        <footer className="attribution">
          <p>
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge">
              Frontend Mentor
            </a>
            . Coded by
            <a href="https://github.com/WebDevCampos">Marcus Rangel</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Notification;
