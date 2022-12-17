import React, { useContext, useEffect, useRef } from "react";
import { AuthC } from "../context/AuthC";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthC);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">

      </div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;