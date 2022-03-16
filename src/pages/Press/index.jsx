import React, {useState, useEffect} from 'react'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'

const Press = () => {
  const [pressItems, setPressItems] = useState(null)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "press"] {
            _id,
            title,
            url,
            'tag': tags[0]->title,
            date,
            source
        }`
      )
      .then((data) => setPressItems(data))
      .catch(console.error)
  }, [])

  const handleClick = () => {
    setDisplay((display) => !display)
  }

  console.log(pressItems)

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
