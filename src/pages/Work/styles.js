import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DisplayIcon = styled.button`
  position: relative;
  right: 0;
`;
