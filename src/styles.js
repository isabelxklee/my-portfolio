import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 28px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const P = styled.p`
  font-size: 28px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
