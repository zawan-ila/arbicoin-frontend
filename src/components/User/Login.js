import React, { useContext, useState } from 'react'
import { UserContext } from './handleUser'
import { useNavigate } from 'react-router-dom'
import LoginSignupForm from './LoginSignupForm'

export default function Signup () {
  const { handleLogin } = useContext(UserContext)

  return (
    <LoginSignupForm handleSubmit={handleLogin} errMessage={'Incorrect Credentials Entered'} isLogin={true}/>
  )
}
