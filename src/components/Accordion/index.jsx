import React, {useState} from 'react'
import {IconContainer, ShowIcon, HideIcon, SectionHeader, H2} from '../../styles'

const Accordion = ({title, children}) => {
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    return setDisplay((display) => !display)
  }

  console.log(display)

  return (
    <>
      <SectionHeader onClick={handleClick}>
        <H2>{title.toUpperCase()}</H2>
        <IconContainer>{display ? <HideIcon /> : <ShowIcon />}</IconContainer>
      </SectionHeader>
      {display && children}
    </>
  )
}

export default Accordion
