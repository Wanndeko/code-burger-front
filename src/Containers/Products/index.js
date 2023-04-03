import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/productsLogo.svg'
import { CardProduct } from '../../components/'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductImage,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

export function Products() {
  const { state } = useLocation()
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProductsoducts] = useState([])
  const [activeCategory, setactiveCategory] = useState(state?.categoryId ?? 0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const allCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(allCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      const allProducts = data.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(allProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProductsoducts(products)
    } else {
      const newFiltleredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProductsoducts(newFiltleredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImage src={ProductsLogo} alt="image da home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setactiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product}></CardProduct>
          ))}
      </ProductsContainer>
    </Container>
  )
}
