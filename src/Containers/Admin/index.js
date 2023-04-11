import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'
export function Admin() {
  const location = useLocation()

  const mountComponents = () => {
    if (location.pathname === '/admin' && location.state === null) {
      return <Orders />
    } else if (location.pathname === '/admin/orders') {
      return <Orders />
    } else if (location.pathname === '/admin/products') {
      return <ListProducts />
    }
  }
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>{mountComponents()}</ContainerItems>
    </Container>
  )
}
