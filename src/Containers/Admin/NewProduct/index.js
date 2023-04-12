import React, { useState, useEffect } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

function NewProduct() {
  const [products, setProducts] = useState()
  useEffect(() => {
    async function loadProcuts() {
      const { data } = await api.post('products')
    }
    loadProcuts()
  }, [])
  return (
    <Container>
      <div>
        <h1>helo put</h1>
      </div>
    </Container>
  )
}

export default NewProduct
