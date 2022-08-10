import styled from 'styled-components'
import {Box} from '../../styles'

export const PressItem = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 20px;
    }
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

  @media (max-width: 640px) {
    margin-top: 18px;
  }
`
