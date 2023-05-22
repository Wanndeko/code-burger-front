import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #e5e5e5;
`

export const ProductImage = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 1070px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 10px;
    /* background-color: black; */
  }
`

export const ProductsContainer = styled.div`
  gap: 50px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  @media (max-width: 1050px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const CategoryButton = styled.button`
  border: none;
  border-bottom: ${props => props.isActiveCategory && 'solid 2px #9758A6'};
  background: none;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
  cursor: pointer;
  padding: 5px;
`
