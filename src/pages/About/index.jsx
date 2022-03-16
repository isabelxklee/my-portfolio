import React, {useState, useEffect} from 'react'
import {Box} from '../../styles'
import {AboutContainer} from './styles'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'
import BlockContent from '@sanity/block-content-to-react'

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
          <AboutContainer>
            {aboutInfo && <BlockContent blocks={aboutInfo[0].content} />}
          </AboutContainer>
        </Box>
      )}
    </>
  )
}

export default About
