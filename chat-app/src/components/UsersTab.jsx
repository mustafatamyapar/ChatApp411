import React from "react";
import Navbar from "./Navbar"
import Search from "./FindUser"
import Chats from "./RecentChats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;