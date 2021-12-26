import styled from 'styled-components'
import {ProjectImage} from '../Project/styles'

export const IntroImage = styled(ProjectImage)`
  position: relative;
  height: 300px;
  width: 300px;
  right: ${({$right}) => $right}%;
  bottom: ${({$bottom}) => $bottom}%;
`

export const ImageContainer = styled.div`
  height: 300px;
  margin: 40px;
  position: relative;
`
