import React, {useState} from 'react'
import {SectionHeader, H2, SpaceP, Box, Half} from '../../styles'
import ToggleDisplay from '../../components/ToggleDisplay'

const About = () => {
  const [display, setDisplay] = useState(true)

  const handleClick = () => {
    setDisplay((display) => !display)
  }

  return (
    <>
      <SectionHeader id="about">
        <H2>about</H2>
        {/* <ToggleDisplay display={display} handleClick={handleClick} /> */}
      </SectionHeader>
      {display && (
        <Box>
          <Half>
            <SpaceP>
              Hello, fellow Internet surfer! Thank you for visiting my corner of the web. 🌞
            </SpaceP>
            <SpaceP>
              My name is Isabel K. Lee and I’m a full-stack developer. I go by they/them pronouns
              and have a background in design and product strategy. I really enjoy working on design
              systems, web applications, and early- to mid-stage startups.
            </SpaceP>
            <SpaceP>
              Before I started my tech career, I studied Middle East foreign policy and philosophy
              in Montreal. I care deeply about political activism, cooking for others, and taking
              care of my large, adult son, Finklestein (he's actually a cat).
            </SpaceP>
            <SpaceP>Let’s build something together!</SpaceP>
          </Half>
        </Box>
      )}
    </>
  )
}

export default About
