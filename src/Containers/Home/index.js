import React from 'react'

import HomeLogo from '../../assets/homeImg.svg'
import { CategoryCarrossel, OfferCarrossel } from '../../components/'
import { Container, HomeImage } from './styles'
export function Home() {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="image da home" />
      <CategoryCarrossel />
      <OfferCarrossel />
    </Container>
  )
}
