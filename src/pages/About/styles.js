import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  p {
    font-size: 24px;
  }
`

export const ImageContainer = styled.div`
  display: block;

  img {
    width: 100%;
  }
`
