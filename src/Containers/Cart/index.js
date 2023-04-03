import React from 'react'

import CartLogo from '../../assets/cartImage.svg'
import { CartItems, CartResume } from '../../components/'
import { Container, CartImage, Wrapper } from './styles'
export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt="image do Cart" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
