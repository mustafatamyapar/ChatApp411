import React from 'react'
import UsersTab from '../components/UsersTab'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
      <Chat/>
        <UsersTab/>
       
      </div>
    </div>
  )
}

export default Home