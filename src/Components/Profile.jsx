import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext';

function Profile() {
    const {username } =useContext(LoginContext);
  return (
    <>
     <h1>FpaMusic!!!!!!!!!!!  here</h1>
    <h2>WELCOME  to  {username} for joininggit music</h2>
  
  </>)
}
export default Profile