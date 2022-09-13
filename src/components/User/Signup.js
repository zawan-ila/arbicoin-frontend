import React, { useContext } from 'react'
import { UserContext } from './handleUser'

export default function Signup () {
  const { handleSignup } = useContext(UserContext)

  const signup = (e) => {
    e.preventDefault()
    const u = e.target.username.value
    const p = e.target.password.value
    handleSignup(u, p)
  }
  return (
    <>
      <div>Signup</div>
      <form onSubmit={signup}>
        <label htmlFor="username">Username</label> <input type="text" name="username" id="username"></input><br />
        <label htmlFor="password">Password</label> <input type="password" name="password" id="password"></input>
        <input type="submit"></input>
      </form>
    </>
  )
}
