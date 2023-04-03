import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import CartIcon from '../../assets/cart-icon.png'
import UserIcon from '../../assets/user-icon.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  LineB,
  ExitLink
} from './styles'
export function Header() {
  const { logout, userData } = useUser()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={CartIcon} alt="icone carrinho" />
        </PageLink>
        <LineB></LineB>
        <PageLink>
          <img src={UserIcon} alt="icone user header" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <ExitLink onClick={logoutUser}>Sair</ExitLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
