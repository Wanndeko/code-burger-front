import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  width: 100%;
  background: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  z-index: 5;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'Bold' : 'normall')};
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const LineB = styled.div`
  border: solid 0.5px #bababa;
  height: 40px;
  opacity: 0.6;
`

export const ExitLink = styled.a`
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;
  /* display: flex;
  align-items: center; */
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
`
