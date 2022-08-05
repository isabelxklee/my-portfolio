import React, {useState, useEffect} from 'react'
import {ExternalLink, H3} from '../../styles'
import {ContactItem, ContactContainer} from './styles'
import sanityClient from '../../client.js'

const Contact = () => {
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

  return (
    <>
      {links && (
        <ContactContainer>
          {links.map((link) => (
            <ContactItem key={link._id}>
              <H3>
                <ExternalLink href={link.url} rel="nolink_referrer" target="_blank" $contact={true}>
                  {link.title.toUpperCase()}
                </ExternalLink>
              </H3>
            </ContactItem>
          ))}
        </ContactContainer>
      )}
    </>
  )
}

export default Contact
