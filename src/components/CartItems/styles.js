import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  gap: 10px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #9a9a9d;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: max-content;
  grid-gap: 10px 15px;
  padding: 10px;
  img {
    border-radius: 10px;
    width: 130px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
  }
  .quantityContainer {
    display: flex;
    align-items: baseline;
    gap: 20px;
  }
  button {
    background: none;
    border: none;
    height: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
export const TrashButton = styled.button`
  img {
    height: 20px;
  }
`
