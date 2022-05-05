import React, {useState, useEffect} from 'react'
import {Avatar,  IconButton} from "@mui/material"
import {MoreVert, SearchOutlined , AttachFile, InsertEmoticon} from "@mui/icons-material";
import "./chat.css"


function Chat() {

  const[seed, setSeed] = useState()

  useEffect(() => {
      setSeed(Math.floor(Math.random()*5000))
  },[])


  return (
    <div className="chat">

      <div className="chat__header">
      <Avatar  src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />


      <div className="chat__headerInfo">
        <h1>React developers</h1>
        <p>Last updated at {new Date().toString().slice(0,25)}</p>
      </div>

      <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
      </div>

      </div>

      <div className="chat__body">
       <p className="chat__message">
        
         <span className="chat__name">
          Irshath ahamed
         </span>
         Hello from irshath
         <span className="chat__timeStamp">
           {new Date().toString().slice(0,25)}

         </span>

       </p>
       <p className="chat__message ">
        
        <span className="chat__name chat__receiver">
         Irshath ahamed
        </span>
        Hello from irshath
        <span className="chat__timeStamp">
          {new Date().toString().slice(0,25)}

        </span>

      </p>

      </div>
      <div className="chat__footer">
        <InsertEmoticon/>
        <form>
        <input type="text" placeholder = "start a new message" />
        <button>send message</button>
        </form>
       

      </div>

      
    </div>
  )
}

export default Chat