import styled from 'styled-components'
import {Box, Grid} from '../../styles'

export const PressContainer = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const PressItem = styled(Box)`
  height: 140px;
  cursor: pointer;
  position: relative;

  @media (max-width: 900px) {
    height: 40px;
    margin-bottom: 0;
  }
`
