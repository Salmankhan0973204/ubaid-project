import React from "react";
import img1 from "../assets/images/icons8-notification-32.png";
import Notification from "./Notification";


const NotificationList = () => {
  const NotificationArray = [
    {
      img: "https://picsum.photos/200/300",
      comments: "hi",
    },
    {
      img: "https://source.unsplash.com/user/c_v_r/1900x800",
      comments: "hello",
    },
  ];
  return (
    <div>
      {NotificationArray.map((item, index) => {
        return(
        <div key={index}>
        

          <Notification  comments={item.comments} img={item.img}/>
        </div>) 
      })}
    </div>
  );
};

export default NotificationList;
