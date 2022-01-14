import React, {useState} from 'react'
import {ExternalLink} from '../../styles'
import {ContactItem, ContactContainer} from './styles'
import ToggleSection from '../../components/ToggleSection'

const Contact = () => {
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    setDisplay((display) => !display)
  }
  return (
    <>
      <ToggleSection display={display} handleClick={handleClick} title={'contact'} />
      {display && (
        <>
          <ContactContainer>
            <ContactItem>
              <ExternalLink
                href="mailto:hi@kleetime.com"
                rel="nolink_referrer"
                target="_blank"
                $contact={true}
              >
                Email
              </ExternalLink>
            </ContactItem>
            <ContactItem>
              <ExternalLink
                href="https://github.com/isabelxklee"
                rel="nolink_referrer"
                target="_blank"
                $contact={true}
              >
                GitHub
              </ExternalLink>
            </ContactItem>
            <ContactItem>
              <ExternalLink
                href="https://www.linkedin.com/in/isabelklee/"
                rel="nolink_referrer"
                target="_blank"
                $contact={true}
              >
                LinkedIn
              </ExternalLink>
            </ContactItem>
          </ContactContainer>
        </>
      )}
    </>
  )
}

export default Contact
