import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import CategoryLogo from '../../assets/CATEGORIAS.png'
import api from '../../services/api'
import {
  Container,
  CategoryImage,
  ContainerItens,
  Image,
  Button
} from './styles'
export function CategoryCarrossel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <CategoryImage src={CategoryLogo} alt="logo da categoria" />
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} alt="foto da cagetoria " />
              <Button
                to={{ pathname: '/produtos' }}
                state={{ categoryId: category.id }}
              >
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
