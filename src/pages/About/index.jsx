import React, {useState, useEffect} from 'react'
import {SpaceP, Box, Half} from '../../styles'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'
import {PortableText} from '@portabletext/react'

const About = () => {
  const [display, setDisplay] = useState(false)
  const [aboutInfo, setAboutInfo] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] {
            _id,
            content
        }`
      )
      .then((data) => setAboutInfo(data))
      .catch(console.error)
  }, [])

  const handleClick = () => {
    setDisplay((display) => !display)
  }

  return (
    <>
      <ToggleSection display={display} handleClick={handleClick} title={'about'} />
      {display && (
        <Box>
          <Half>
            <SpaceP>{aboutInfo && <PortableText value={aboutInfo[0].content} />}</SpaceP>
          </Half>
        </Box>
      )}
    </>
  )
}

export default About
