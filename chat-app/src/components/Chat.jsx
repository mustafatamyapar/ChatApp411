
import React, { useContext } from "react";
import Messages from "./AllMessages";
import Input from "./TextIn";
import { ChatC } from "../context/ChatC";

const Chat = () => {
  const { data } = useContext(ChatC);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;