import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'

function PrivateRoute({ children, isAdmin }) {
  const user = localStorage.getItem('codeburguer:userData')

  return user ? (
    <>
      {!isAdmin && <Header />}
      {children}
    </>
  ) : (
    <Navigate to="login" />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  isAdmin: PropTypes.bool
}

export default PrivateRoute
