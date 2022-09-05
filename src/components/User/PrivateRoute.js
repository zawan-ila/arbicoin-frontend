import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from './handleUser'

export default function PrivateRoute ({ children }) {
  const { user } = useContext(UserContext)
  const location = useLocation()

  if (user) {
    return children
  }

  const url = location.pathname + location.search + location.hash

  return (
    <Navigate to="/login" />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}
