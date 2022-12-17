import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthC } from '../context/AuthC'

const Navbar = () => {
  const {currentUser} = useContext(AuthC)

  return (
    <div className='navbar'>
          <img src={require('./ourLogo.jpg')}width="60" 
     height="60"></img>
      <span className="logo">ChatWill</span>
      <div className="user">
      <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar