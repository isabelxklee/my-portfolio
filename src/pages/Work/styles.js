import styled from 'styled-components'
import {Grid} from '../../styles'

export const ProjectContainer = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
