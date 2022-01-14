import styled from 'styled-components'
import {ProjectImage} from '../Project/styles'

export const IntroImage = styled(ProjectImage)`
  height: 300px;
  width: 300px;

  @media (max-width: 800px) {
    height: 220px;
    width: 220px;
  }

  @media (max-width: 500px) {
    height: 100%;
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;

  @media (max-width: 800px) {
    padding: 20px 0;
  }
`
