import styled from 'styled-components'

export const FooterContainer = styled.div`
  padding: 40px;
  display: flex;

  @media (max-width: 960px) {
    padding: 40px 0 60px 0;
    flex-direction: column;
  }
`

export const Left = styled.div`
  position: absolute;
  left: 40px;

  @media (max-width: 960px) {
    position: unset;
  }
`

export const Right = styled.div`
  position: absolute;
  right: 40px;

  @media (max-width: 960px) {
    position: unset;
    right: unset;
    left: 0;
    margin-top: 20px;
  }
`
