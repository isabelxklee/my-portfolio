import React from 'react'
import {HeaderContainer} from './styles'
import {StyledLink} from '../../styles'

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -90
    window.scrollTo({top: yCoordinate + yOffset, behavior: 'smooth'})
  }

  return (
    <HeaderContainer>
      <StyledLink smooth to={'/#top'} scroll={(el) => scrollWithOffset(el)}>
        home
      </StyledLink>
      <StyledLink smooth to={'/#work'} scroll={(el) => scrollWithOffset(el)}>
        work
      </StyledLink>
      <StyledLink smooth to={'/#tech-writing'} scroll={(el) => scrollWithOffset(el)}>
        tech writing
      </StyledLink>
      <StyledLink smooth to={'/#play'} scroll={(el) => scrollWithOffset(el)}>
        play
      </StyledLink>
      <StyledLink smooth to={'/#about'} scroll={(el) => scrollWithOffset(el)}>
        about
      </StyledLink>
      <StyledLink smooth to={'/#contact'} scroll={(el) => scrollWithOffset(el)}>
        contact
      </StyledLink>
    </HeaderContainer>
  )
}

export default Header
