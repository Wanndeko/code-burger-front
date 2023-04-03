import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../Containers/'
import PrivateRoute from './private-route'
function MultRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route
          path={'/'}
          element={
            <PrivateRoute>
              <Home />{' '}
            </PrivateRoute>
          }
        />
        <Route
          path={'/produtos'}
          element={
            <PrivateRoute>
              <Products />{' '}
            </PrivateRoute>
          }
        />
        <Route
          path={'/carrinho'}
          element={
            <PrivateRoute>
              <Cart />{' '}
            </PrivateRoute>
          }
        />
        <Route
          path={'/pedidos'}
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path={'/cadastro'} element={<Register />} />
      </Routes>
    </Router>
  )
}

export default MultRoutes
