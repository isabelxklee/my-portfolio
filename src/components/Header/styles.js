import styled from 'styled-components'
import {Colors} from '../../styles'

export const HeaderContainer = styled.div`
  border: 1px solid ${Colors.red};
  padding: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0;

  @media (max-width: 850px) {
    display: none;
  }
`
