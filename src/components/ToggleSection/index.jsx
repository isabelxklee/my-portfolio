import React from 'react'
import {IconContainer, ShowIcon, HideIcon, SectionHeader, H2} from '../../styles'

const ToggleSection = ({display, handleClick, title}) => {
  return (
    <SectionHeader id="work" onClick={handleClick}>
      <H2>{title.toUpperCase()}</H2>
      <IconContainer>{display ? <HideIcon /> : <ShowIcon />}</IconContainer>
    </SectionHeader>
  )
}

export default ToggleSection
