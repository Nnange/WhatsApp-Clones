import { Avatar } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import "../CSS/SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter name for chat");

        if (roomName){
            // do some stuff in the database
        }
    }

  return !addNewChat ? (
    <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  ) : (
      <div onClick={createChat} className="sidebarChat">
          <h2>Add new Chat</h2>
      </div>
  )
};

export default SidebarChat;