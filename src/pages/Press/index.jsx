import React, {useState} from 'react'
import ToggleSection from '../../components/ToggleSection'

const Press = () => {
  const [pressItems, setPressItems] = useState(null)
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    setDisplay((display) => !display)
  }

  console.log(pressItems, setPressItems())

  return (
    <>
      <ToggleSection display={display} handleClick={handleClick} title={'press'} />
      {/* {pressItems && (
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
      )} */}
    </>
  )
}

export default Press
