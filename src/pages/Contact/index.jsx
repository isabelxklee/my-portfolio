import React, {useState, useEffect} from 'react'
import {ExternalLink} from '../../styles'
import {ContactItem, ContactContainer} from './styles'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'

const Contact = () => {
  const [display, setDisplay] = useState(false)
  const [links, setLinks] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "link" && category[0]->title == "Contact"] {
            _id,
            title,
            url,
            "category": category[0]->title,
        }`
      )
      .then((data) => setLinks(data))
      .catch(console.error)
  }, [])

  const handleClick = () => {
    setDisplay((display) => !display)
  }

  return (
    <>
      <ToggleSection display={display} handleClick={handleClick} title={'contact'} />
      {display && (
        <>
          <ContactContainer>
            {links.map((link) => (
              <ContactItem key={link._id}>
                <ExternalLink href={link.url} rel="nolink_referrer" target="_blank" $contact={true}>
                  {link.title}
                </ExternalLink>
              </ContactItem>
            ))}
          </ContactContainer>
        </>
      )}
    </>
  )
}

export default Contact
