import styled from 'styled-components'

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
