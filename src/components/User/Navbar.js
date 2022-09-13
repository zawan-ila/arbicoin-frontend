import React, { useContext } from 'react'
import { UserContext } from './handleUser'
import { useNavigate } from 'react-router-dom'

import './Navbar.css'
export default function Navbar () {
  const navigate = useNavigate()

  const { user, handleLogout } = useContext(UserContext)

  return (
    <div className="navbar">

      {user ? <><span>{user}</span><button onClick={handleLogout}>Logout</button></> : <><button onClick={() => navigate('/signup')}>Signup</button> <button onClick={() => navigate('/login')}>Login</button></>}
    </div>
  )
}
