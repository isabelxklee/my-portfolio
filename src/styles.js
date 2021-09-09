import styled, { createGlobalStyle } from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { ReactComponent as Icon1 } from "./assets/icon-show.svg";
import { ReactComponent as Icon2 } from "./assets/icon-hide.svg";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: "Helvetica Neue", "sans-serif";
    text-transform: uppercase;
  }
`;

export const StyledLink = styled(NavHashLink)`
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
  line-height: 0.9;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 60px;
  }
`;

export const H2 = styled.h1`
  font-size: 60px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 40px;
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

export const SmallP = styled(P)`
  font-size: 18px;
`;

export const SpaceP = styled(P)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Box = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Space = styled.div`
  margin-top: 20px;
`;

export const SectionHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const ShowIcon = styled(Icon1)`
  position: relative;
  right: 0;
`;

export const HideIcon = styled(Icon2)`
  position: relative;
  right: 0;
`;

export const IconContainer = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Half = styled.div`
  width: 50%;
`;

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: #000;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;
