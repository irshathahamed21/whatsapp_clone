import React from 'react'
import {Button} from "@mui/material"
import {auth, provider} from "../../firebase"
import {signInWithPopup} from "firebase/auth";
import {useStateValue} from "../../context/StateProvider";
import {actionTypes} from "../../context/reducer"
import "./login.css"

function Login() {
    const[state, dispatch] = useStateValue()
    console.log(state)
    const signIn = () =>  {
        signInWithPopup(auth,provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            }
            
            )
            console.log(result)
        }
        )
        .catch((error) => {console.log("error",error)})
    }


  return (
    <div className = "login">
        <div className="login__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="logo" />
        <div className="login__text">
            <h1>Sign in to whatsapp</h1>
        </div>
       
       <Button onClick = {signIn}>Sign in with Google</Button>
        </div>


    </div>
  )
}

export default Login