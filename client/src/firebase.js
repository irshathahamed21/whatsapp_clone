
import {initializeApp} from "firebase/app"

import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDWK4jMYKdfnZrSWs_QxvEvN-uv9Ffz4WM",
    authDomain: "whatsapp-mern-clone-57412.firebaseapp.com",
    projectId: "whatsapp-mern-clone-57412",
    storageBucket: "whatsapp-mern-clone-57412.appspot.com",
    messagingSenderId: "777459989890",
    appId: "1:777459989890:web:efc1a3d257c757b8d8e39b"
  };

const app = initializeApp(firebaseConfig)

const auth = getAuth()

const provider = new GoogleAuthProvider()

export {app,auth,provider}

