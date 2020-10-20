import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db, { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const Sidebar = () => {
  const [rooms, setRoooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);



  const handleAuthentication = () => {
    if (user) {
      auth.signOut().then(()=> {
        console.log('logged out');
        dispatch({
          type:actionTypes.REMOVE_USER,
          user: null,
        })
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
  
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRoooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          

          <Dropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <IconButton>
                <MoreVertIcon className="vertIcon"  />
              </IconButton>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>New Group</DropdownItem>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Archive</DropdownItem>
              <DropdownItem>Favourite</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem onClick={handleAuthentication}>LogOut {user?.displayName}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
