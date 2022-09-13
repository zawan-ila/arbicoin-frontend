import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from './handleUser'

export default function PublicRoute ({ children }) {
  const { user } = useContext(UserContext)
  const location = useLocation()
  const navigate = useNavigate()

  if (user) {
    let next = '/'
    if (location.state && location.state.next) {
      next = location.state.next
    }

    return <Navigate to={next} />
  }

  return children
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}
