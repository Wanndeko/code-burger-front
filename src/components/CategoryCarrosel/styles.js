import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 35px 0;
  background: #efefef;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImage = styled.img`
  @media (max-width: 458px) {
    width: 100%;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 60px;
  margin-top: 16px;
  border: none;
  background: #9758a6;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;

  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
`
