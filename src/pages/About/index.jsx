import React, {useState, useEffect} from 'react'
import {Box} from '../../styles'
import {AboutContainer} from './styles'
import sanityClient from '../../client.js'
import BlockContent from '@sanity/block-content-to-react'

const About = () => {
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

  return (
    <>
      {aboutInfo && (
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
