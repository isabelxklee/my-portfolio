import styled from 'styled-components'
import {Box, Grid} from '../../styles'

export const PressContainer = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const PressItem = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    margin-bottom: 0;
  }
`

export const MetadataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 12px;
  }
`
