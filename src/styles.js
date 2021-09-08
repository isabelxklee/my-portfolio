import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: "Helvetica Neue", "sans-serif";
    text-transform: uppercase;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 28px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  margin: 40px;
`;

export const H1 = styled.h1`
  font-size: 120px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 60px;
  }
`;

export const P = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
