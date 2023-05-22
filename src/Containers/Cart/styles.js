import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
`

export const CartImage = styled.img`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`
