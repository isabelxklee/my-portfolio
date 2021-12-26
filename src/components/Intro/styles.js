import styled from 'styled-components'
import {ProjectImage} from '../Project/styles'

export const IntroImage1 = styled(ProjectImage)`
  height: 300px;
  width: 300px;
  position: absolute;
  right: 5%;
  bottom: 10%;
`

export const IntroImage2 = styled(IntroImage1)`
  height: 240px;
  width: 240px;
  right: 30%;
  bottom: -15%;
`

export const IntroImage3 = styled(IntroImage1)`
  height: 320px;
  width: 320px;
  right: 50%;
  bottom: -10%;
`

export const ImageContainer = styled.div`
  height: 300px;
  margin: 40px 0 80px 0;
  position: relative;
`
