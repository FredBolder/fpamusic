import React, { useContext } from 'react'
import {useState} from 'react'
import { LoginContext } from '../Context/LoginContext';
function Login() {
    const {setUsername ,setshowProfile} = useContext(LoginContext);
   
  return (

    <> <h1>FPAMusic</h1>
    <p>“We are delighted that you have decided to join us"....Welcome to our FPAmusic page</p>
 Please Enter your Name:
    <input type ="text" placeholder ="username" onChange={(e)=>setUsername(e.target.value)}></input><hr/>
    
    <button onClick={()=>{setshowProfile(true)}} >Get started </button>
    <p> info..........

    </p>

    </>
  )
}

export default Login
