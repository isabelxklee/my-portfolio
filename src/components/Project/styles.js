import styled from 'styled-components'
import {P, Colors} from '../../styles'

export const Tag = styled(P)`
  color: red;

  &:nth-child(even) {
    color: blue;
  }
`

export const ProjectImage = styled.img`
  border: 1px solid ${Colors.primary};
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 1100px) {
    height: 200px;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`
