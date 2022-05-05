import React from 'react'
import { Avatar, IconButton } from "@mui/material"
import { useStateValue } from "../../context/StateProvider"
import {Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import "./sidebar.css";
import SidebarChat from '../sidebarChat/SidebarChat';

function Sidebar() {
    const [{ user }] = useStateValue()

    return (

        <div className='sidebar'>
            <div className = "sidebar__header">
        <Avatar src={user.photoURL} />
            <div className = "sidebar__headerRight">
                <IconButton>
                    <DonutLarge/>
                </IconButton>
                <IconButton>
                    <Chat/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            
            </div>
            <div className = "sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder = "Search or start a new chat" />


                </div>

            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>


    )
}

export default Sidebar