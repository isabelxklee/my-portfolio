import React, {useState, useEffect} from 'react'
import {SmallP, ExternalLink} from '../../styles'
import {FooterContainer} from './styles'
import sanityClient from '../../client.js'

const Footer = () => {
  const [links, setLinks] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "link" && category[0]->title == "Footer"] {
            _id,
            title,
            url,
            "category": category[0]->title,
        }`
      )
      .then((data) => setLinks(data))
      .catch(console.error)
  }, [])

  const copyright = 'Copyright © 2022 Isabel K. Lee. All rights reserved.'

  return (
    <FooterContainer>
      <SmallP>{copyright.toUpperCase()}</SmallP>
      {links && (
        <SmallP>
          BUILT WITH{' '}
          <ExternalLink href={links[0].url} rel="nolink_referrer" target="_blank">
            {links[0].title.toUpperCase()}
          </ExternalLink>{' '}
          AND{' '}
          <ExternalLink href={links[1].url} rel="nolink_referrer" target="_blank">
            {links[1].title.toUpperCase()}
          </ExternalLink>
          .
        </SmallP>
      )}
    </FooterContainer>
  )
}
export default Footer
