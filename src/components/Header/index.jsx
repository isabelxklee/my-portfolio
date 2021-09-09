import React from "react";
import { HeaderContainer } from "./styles";
import { StyledLink } from "../../styles";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink smooth to={"/#top"}>
        home
      </StyledLink>
      <StyledLink smooth to={"/#work"}>
        work
      </StyledLink>
      <StyledLink smooth to={"/#tech-writing"}>
        tech writing
      </StyledLink>
      <StyledLink smooth to={"/#play"}>
        play
      </StyledLink>
      <StyledLink smooth to={"/#about"}>
        about
      </StyledLink>
      <StyledLink smooth to={"/#contact"}>
        contact
      </StyledLink>
    </HeaderContainer>
  );
};

export default Header;
