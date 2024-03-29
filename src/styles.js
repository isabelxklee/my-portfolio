import styled, {createGlobalStyle} from 'styled-components'
import {NavHashLink} from 'react-router-hash-link'
import {ReactComponent as Icon1} from './assets/icon-show.svg'
import {ReactComponent as Icon2} from './assets/icon-hide.svg'

export const Colors = {
  primary: '#1B1918',
  secondary: '#EBFF00',
  tertiary: '#0500FF',
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: "Helvetica Neue", "sans-serif";
    color: ${Colors.primary};
    background-color: ${Colors.secondary};
    transition: 0.3s;
  }
`

export const SiteTitle = styled.div`
  margin: 300px 0 240px 0;
  color: ${Colors.tertiary};

  @media (max-width: 960px) {
    margin: 200px 0 100px 0;
  }
`

export const TagLine = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin: 20px 0 0 0;
  width: 70%;

  @media (max-width: 600px) {
    font-size: 28px;
    width: 100%;
  }
`

export const StyledLink = styled(NavHashLink)`
  color: ${Colors.primary};
  text-decoration: none;
  font-size: 28px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export const Wrapper = styled.div`
  margin: 40px;

  @media (max-width: 1000px) {
    margin: 20px;
  }
`

export const H1 = styled.h1`
  font-size: 120px;
  font-weight: 500;
  line-height: 0.9;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 60px;
  }
`

export const H2 = styled.h1`
  font-size: 60px;
  font-weight: 500;
  margin: 0;
  color: ${Colors.tertiary};

  @media (max-width: 600px) {
    font-size: 40px;
  }
`

export const H3 = styled.h3`
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 12px 0;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`

export const P = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  position: ${({$position}) => $position};
  z-index: ${({$zIndex}) => $zIndex};

  @media (max-width: 1100px) {
    font-size: 20px;
  }
`

export const SmallP = styled(P)`
  font-size: 18px;
`

export const SpaceP = styled(P)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const Box = styled.div`
  border: 1px solid ${Colors.primary};
  padding: 20px;
  margin-bottom: 20px;
`

export const Space = styled.div`
  margin-top: 20px;
`

export const AccordionContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${Colors.tertiary};
  }
`

export const ShowIcon = styled(Icon1)`
  position: relative;
  right: 0;

  path {
    fill: ${Colors.primary};
  }

  @media (max-width: 600px) {
    width: 50px;
  }
`

export const HideIcon = styled(Icon2)`
  position: relative;
  right: 0;

  path {
    fill: ${Colors.primary};
  }

  @media (max-width: 600px) {
    width: 50px;
  }
`

export const IconContainer = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  height: 72px;
`

export const Half = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

export const ThreeColumnGrid = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const ExternalLink = styled.a`
  text-decoration: none;
  color: ${Colors.primary};
  transition: 0.3s;
  position: ${({$contact}) => ($contact ? 'absolute' : 'unset')};
  width: 100%;
  height: 100%;
  font-weight: 800;
  transition: 0.3s;

  &:hover {
    color: ${Colors.tertiary};
  }
`

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: ${Colors.primary};
  cursor: pointer;
`

export const Tag = styled.div`
  border-radius: 4px;
  border: none;
  background-color: ${Colors.primary};
  color: ${Colors.secondary};
  padding: 8px 12px;
  text-transform: uppercase;
  width: fit-content;
`
