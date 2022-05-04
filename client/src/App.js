import Login from "./components/login/Login"
import {useStateValue} from "./context/StateProvider"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import "./App.css"
import Chat from "./components/chat/Chat"


function App(){

  const [ {user} ] = useStateValue() 
  return  (
    <div className = "app">
    
    {
      !user ?
      <Login/> : 
      <div className = "app_body">
        <Router>
          <Routes>
            <Route path = "/" element = {<Chat/>} />
            <Route path = "/rooms:/roomId" element = {<Chat/>} />
          </Routes>
        </Router>
      </div>
    }

    </div>
  )
}

export default App