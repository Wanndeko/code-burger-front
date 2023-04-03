import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../Containers/'
import PrivateRoute from './private-route'
function MultRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/products"
          element={<PrivateRoute component={Products} />}
        />
        <Route path="/cart" element={<PrivateRoute component={Cart} />} />

        <Route
          path="/admin"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/orders"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/products"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/new-product"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/edit-product"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
      </Routes>
    </Router>
  )
}

export default MultRoutes
