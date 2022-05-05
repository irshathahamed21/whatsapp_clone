import React , {useEffect,useState}from 'react'

import "./sidebarchat.css"
import {Avatar} from "@mui/material"

function SidebarChat() {
    const[seed, setSeed] = useState()

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    },[])

  return (
      <div className="sidebarchat">
          <Avatar 
          src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />
      </div>
  )
}

export default SidebarChat