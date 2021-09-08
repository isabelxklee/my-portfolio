import styled from "styled-components";

export const HeaderContainer = styled.div`
  border: 1px solid #000;
  padding: 30px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;

  @media (max-width: 850px) {
    display: none;
  }
`;
