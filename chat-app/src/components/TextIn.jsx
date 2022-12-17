import React, { useContext, useState } from "react";
import { AuthC } from "../context/AuthC";
import { ChatC } from "../context/ChatC";
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

  const { currentUser } = useContext(AuthC);
  const { data } = useContext(ChatC);

  const handleSend = async () => {

      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({id: uuid(),text,senderId: currentUser.uid,senderName: currentUser.displayName,date: Timestamp.now(),}),});


    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {text,},[data.chatId + ".date"]: serverTimestamp(),});
/*
const tryToHandle = {
  handleObject : [
    {id: text,Id: currentUser.uid,senderName: "mock"},
    {id: text,Id: currentUser.uid,senderName: "mock"}
  ]
}
*/

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