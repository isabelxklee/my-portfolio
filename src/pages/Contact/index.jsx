import React from 'react'
import {SectionHeader, H2, ExternalLink} from '../../styles'
import {ContactItem, ContactContainer} from './styles'

const Contact = () => {
  return (
    <>
      <SectionHeader id="contact">
        <H2>contact</H2>
      </SectionHeader>
      <ContactContainer>
        <ContactItem>
          <ExternalLink href="mailto:hi@kleetime.com" rel="nolink_referrer" target="_blank">
            Email
          </ExternalLink>
        </ContactItem>
        <ContactItem>
          <ExternalLink href="https://github.com/isabelxklee" rel="nolink_referrer" target="_blank">
            GitHub
          </ExternalLink>
        </ContactItem>
        <ContactItem>
          <ExternalLink
            href="https://www.linkedin.com/in/isabelklee/"
            rel="nolink_referrer"
            target="_blank"
          >
            LinkedIn
          </ExternalLink>
        </ContactItem>
      </ContactContainer>
    </>
  )
}

export default Contact
