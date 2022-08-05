import React, {useState} from 'react'
import {IconContainer, ShowIcon, HideIcon, AccordionContainer, H2} from '../../styles'

const Accordion = ({title, children}) => {
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    return setDisplay((display) => !display)
  }

  return (
    <>
      <AccordionContainer onClick={handleClick}>
        <H2>{title.toUpperCase()}</H2>
        <IconContainer>{display ? <HideIcon /> : <ShowIcon />}</IconContainer>
      </AccordionContainer>
      {display && children}
    </>
  )
}

export default Accordion
