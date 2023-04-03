import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 20px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .containerTop {
    display: grid;
    grid-gap: 10px 60px;
    grid-template-areas:
      'title title'
      'items priceTotal'
      'delivery deliveryPrice';

    .title {
      grid-area: title;
      margin-bottom: 16px;
    }

    .items {
      grid-area: items;
    }

    .priceTotal {
      grid-area: priceTotal;
    }

    .delivery {
      grid-area: delivery;
    }

    .deliveryPrice {
      grid-area: deliveryPrice;
    }
  }

  .containerBotton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    font-size: 24px;
  }
`
