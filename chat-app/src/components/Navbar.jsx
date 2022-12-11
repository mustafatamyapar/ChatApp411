import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  const mockName = currentUser.email.split('@')[0];



  return (
    <div className='navbar'>
      <span className="logo">ChatIn</span>
      <div className="user">
        <span>{mockName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar