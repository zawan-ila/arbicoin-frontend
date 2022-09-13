import React, { createContext, useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import axios from 'axios'

export const UserContext = createContext()

export default function UserProvider ({ children }) {
  const [user, setUser] = useState(localStorage.getItem('user') ? localStorage.getItem('user') : null)
  const [tokens, setTokens] = useState(localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null)
  const myAxios = axios.create({
    headers: { Authorization: `${tokens ? tokens.access ? 'Bearer ' + tokens.access : '' : ''}` }
  })

  myAxios.interceptors.response.use(function (response) {
    return response
  }, async function (error) {
    let resp

    if (tokens) {
      try {
        resp = await axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/token/refresh/', {
          refresh: localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')).refresh : ''
        })
        setTokens(o => resp.data)
        localStorage.setItem('tokens', JSON.stringify(resp.data))
      } catch (e) {
        console.log('REFRESH TOKEN EXPIRED?')
        handleLogout()
      }
    }

    error.config.headers.Authorization = `${tokens ? tokens.access ? 'Bearer ' + resp.data.access : '' : ''}`
    return axios.request(error.config)
  })

  const handleLogin = async (username, password) => {
    const result = await axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/token/', {
      username, password
    })

    if (result.status === 200) {
      setUser(username)
      setTokens(result.data)
      localStorage.setItem('user', username)
      localStorage.setItem('tokens', JSON.stringify(result.data))
    }

    return result
  }

  const handleLogout = () => {
    setUser(null)
    setTokens(null)
    localStorage.removeItem('user')
    localStorage.removeItem('tokens')
  }

  const handleSignup = async (username, password) => {
    const result = await axios.post(process.env.REACT_APP_BACKEND_URL + 'auth/signup/', {
      username, password
    })

    if (result.status === 201) {
      handleLogin(username, password)
    }

    return result
  }

  return (
    <UserContext.Provider value={{ user, tokens, setUser, handleLogin, handleLogout, handleSignup, myAxios }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
