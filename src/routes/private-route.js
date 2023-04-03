import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'

function PrivateRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem('codeburguer:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  if (!user.admin && rest.isAdmin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!rest.isAdmin && <Header />}
      <Component />
    </>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

export default PrivateRoute
