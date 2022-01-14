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

  return (
    <FooterContainer>
      <SmallP>Copyright © 2022 Isabel K. Lee. All rights reserved.</SmallP>
      {links && (
        <SmallP>
          Built with{' '}
          <ExternalLink href={links[0].url} rel="nolink_referrer" target="_blank">
            {links[0].title}
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href={links[1].url} rel="nolink_referrer" target="_blank">
            {links[1].title}
          </ExternalLink>
          .
        </SmallP>
      )}
    </FooterContainer>
  )
}
export default Footer
