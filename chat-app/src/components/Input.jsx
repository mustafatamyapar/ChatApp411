import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db} from "../firebase";
import { v4 as uuid } from "uuid";
const Input = () => {
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    
    //For the chats of the user
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({id: uuid(),text,senderId: currentUser.uid,senderName: currentUser.displayName,date: Timestamp.now(),}),});

//For the userChats data table
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {text,},[data.chatId + ".date"]: serverTimestamp(),});
//For the userChats data table
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {text,},[data.chatId + ".date"]: serverTimestamp(),});

    setText("");
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Will say..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
};

export default Input;