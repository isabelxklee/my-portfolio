import styled from 'styled-components'
import {Box, Grid} from '../../styles'

export const ContactContainer = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const ContactItem = styled(Box)`
  height: 140px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  @media (max-width: 900px) {
    height: 40px;
    margin-bottom: 0;
  }
`
