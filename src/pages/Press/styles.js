import styled from 'styled-components'
import {Box, Grid} from '../../styles'

export const PressContainer = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const PressItem = styled(Box)`
  height: 140px;
  position: relative;

  @media (max-width: 900px) {
    height: 40px;
    margin-bottom: 0;
  }
`
