import styled from 'styled-components'

import { Button } from '../../../components'
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #565656;
    width: 417px;
    height: max-content;
    border-radius: 10px;
    padding: 30px;
  }
`
export const LabelUpuload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: dashed 1px #ffffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  input {
    opacity: 0;
    width: 1px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  border: none;
  height: 40px;
  padding-left: 10px;
  font-size: 16px;
`

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 50px;
  min-height: 36.13px;
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
