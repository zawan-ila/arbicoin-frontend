import React, { useContext } from 'react'
import { UserContext } from './handleUser'
import { useNavigate } from 'react-router-dom'

export default function Login () {
  const { handleLogin, user } = useContext(UserContext)
  const nav = useNavigate()

  const login = (e) => {
    e.preventDefault()
    const u = e.target.username.value
    const p = e.target.password.value
    handleLogin(u, p)
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={login}>
        <label htmlFor="username">Username</label> <input type="text" name="username" id="username"></input><br />
        <label htmlFor="password">Password</label> <input type="password" name="password" id="password"></input>
        <input type="submit"></input>
      </form>
      {user && nav(-1)}
    </>
  )
}
