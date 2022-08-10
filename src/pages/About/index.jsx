import React from 'react'
import {Box} from '../../styles'
import {AboutContainer} from './styles'
import {PortableText} from '@portabletext/react'

const About = ({aboutCopy}) => (
  <Box>
    <AboutContainer>
      <PortableText value={aboutCopy} />
    </AboutContainer>
  </Box>
)

export default About
