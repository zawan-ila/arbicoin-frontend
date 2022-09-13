import React, { useContext, useState } from 'react'
import { UserContext } from './handleUser'
import { useNavigate } from 'react-router-dom'

export default function Signup () {
  const [formError, setFormError] = useState(false)
  const { handleSignup } = useContext(UserContext)
  const nav = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    const u = e.target.username.value
    const p = e.target.password.value
    const res = await handleSignup(u, p)

    if (!res) {
      setFormError(true)
    } else {
      setFormError(false)
    }
  }
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full text-center">
            <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
            <span className={(formError ? '' : 'hidden ') + 'flex mb-1 items-center font-medium tracking-wide text-red-500 text-xs mt-0 ml-1'}>
              Username Is Already Taken !
            </span>
            <form onSubmit={signup}>
              <input
                        required
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="Username" />

              <input
                        required
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

              <button
                        type="submit"
                        className="w-full text-center font-semibold py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Sign Up</button>
            </form>
            <hr className='my-4'/>

            <button
                      onClick={() => nav('/login')}
                      type="submit"
                      className="w-1/2 text-center font-semibold py-3 rounded bg-gray-400 text-white hover:bg-gray-500 focus:outline-none my-1"
                  >Log In</button>

          </div>

        </div>
      </div>

    </>

  )
}
