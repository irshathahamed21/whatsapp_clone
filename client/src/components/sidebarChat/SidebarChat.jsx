import React , {useEffect,useState}from 'react'

import "./sidebarchat.css"
import {Avatar} from "@mui/material"

function SidebarChat({addNewChat}) {
    const[seed, setSeed] = useState()

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    },[])

  return !addNewChat ? (
      <div className="sidebarChat">
          <Avatar 
          src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />
          <div className="sidebarChat__info">
              <h1>heloo</h1>
          </div>
      </div>
  ) : (
    <div className="sidebarChat">

    <h1>add new chat</h1>
    
    </div>

  )
}

export default SidebarChat