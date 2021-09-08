import React from "react";
import { HeaderContainer } from "./styles";
import { StyledLink } from "../../styles";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to={"/"}>home</StyledLink>
      <StyledLink to={"/work"}>work</StyledLink>
      <StyledLink to={"/tech-writing"}>tech writing</StyledLink>
      <StyledLink to={"/play"}>play</StyledLink>
      <StyledLink to={"/about"}>about</StyledLink>
      <StyledLink to={"/contact"}>contact</StyledLink>
    </HeaderContainer>
  );
};

export default Header;
