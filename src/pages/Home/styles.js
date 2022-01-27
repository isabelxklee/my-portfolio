import styled from 'styled-components'
import {Colors} from '../../styles'

export const Title = styled.div`
  position: relative;
  height: 1000px;
`

export const TitleImage = styled.img`
  width: 700px;
  display: block;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export const TitleImageContainer = styled.div`
  span {
    display: none;
    position: absolute;
    z-index: 1;
  }

  &:hover span {
    display: block;
  }
`

export const DoodleComputer = styled.img`
  display: block;
  position: absolute;
  width: 175px;
  left: 5%;
`

export const DoodleGlasses = styled(DoodleComputer)`
  left: unset;
  right: 5%;
  top: 15%;
`

export const DoodleHat = styled(DoodleComputer)`
  top: 55%;
  left: 10%;
  width: 150px;
`

export const DoodleRat = styled(DoodleComputer)`
  left: unset;
  right: 15%;
  top: 45%;
`

export const WelcomeMessage = styled.h1`
  font-size: 80px;
  position: fixed;
  bottom: 40%;
  width: 50%;
  color: ${Colors.peach};
  text-shadow: 1px 1px 15px ${Colors.red}, 1px 1px 15px ${Colors.red};
`
