import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext';

function Profile() {
    const {username } =useContext(LoginContext);
  return (
    <>
     <h1>FpaMusic!!!!!!!!!!!</h1>
    <h2>WELCOME  {username}</h2>
  
  </>)
}
export default Profile