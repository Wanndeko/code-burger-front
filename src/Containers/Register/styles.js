import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95%;
  background: #373737;
  padding: 25px 72px;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;

  h1 {
    margin-top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
  }
  img {
    height: 18%;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const RegisterImage = styled.img`
  height: 95%;
`

export const Label = styled.p`
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
`

export const SignInLogin = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Input = styled.input`
  height: 38.32px;
  width: 391.42px;
  padding-left: 10px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? 'solid 2px #CC1717' : ' none')};
`
