import React, { useContext, useState } from 'react'
import { UserContext } from './handleUser'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LoginSignupForm ({ handleSubmit, errMessage, isLogin }) {
  const [formError, setFormError] = useState(false)
  const { handleSignup } = useContext(UserContext)
  const { handleLogin } = useContext(UserContext)

  const nav = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    const u = e.target.username.value
    const p = e.target.password.value

    const res = await handleSubmit(u, p)

    !res ? setFormError(true) : setFormError(false)
  }

  const login = async (e) => {
    e.preventDefault()
    const u = e.target.username.value
    const p = e.target.password.value

    const res = await handleSubmit(u, p)

    !res ? setFormError(true) : setFormError(false)
  }

  return (
    <>
      <div className="bg-blue-200 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full text-center">
            <h1 className="mb-8 text-3xl text-center">{isLogin ? 'Log In' : 'Sign Up'}</h1>
            <span className={(formError ? '' : 'hidden ') + 'flex mb-1 items-center font-medium tracking-wide text-red-500 text-xs mt-0 ml-1'}>
              {errMessage}
            </span>
            <form onSubmit={isLogin ? login : signup}>
              <input
                        required
                        type="text"
                        className="form-input"
                        name="username"
                        placeholder="Username" />

              <input
                        required
                        type="password"
                        className="form-input"
                        name="password"
                        placeholder="Password" />

              <button
                        type="submit"
                        className="form-submit w-full bg-green-500 hover:bg-green-600"
                    >{isLogin ? 'Log In' : 'Sign Up'}</button>
            </form>
            <hr className='my-4'/>

            <button
                      onClick={() => nav(isLogin ? '/signup' : '/login')}
                      type="submit"
                      className="form-submit w-1/2 bg-gray-400 hover:bg-gray-500"
                  >{isLogin ? 'Sign Up' : 'Log In'}</button>

          </div>

        </div>
      </div>

    </>

  )
}

LoginSignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errMessage: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired
}
