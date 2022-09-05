import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext } from './handleUser'

export default function PublicRoute ({ children }) {
  const { user } = useContext(UserContext)
  if (user) {
    return <Navigate to="/" />
  }

  return children
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}
