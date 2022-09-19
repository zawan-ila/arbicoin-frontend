import React, { useContext, useState } from 'react'
import { UserContext } from './handleUser'
import { useNavigate } from 'react-router-dom'
import LoginSignupForm from './LoginSignupForm'

export default function Signup () {
  const { handleSignup } = useContext(UserContext)

  return (
    <LoginSignupForm handleSubmit={handleSignup} errMessage={'Username Unavailable'} isLogin={false}/>
  )
}
