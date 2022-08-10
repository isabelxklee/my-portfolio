import React from 'react'
import {SmallP, ExternalLink} from '../../styles'
import {FooterContainer} from './styles'

const Footer = () => {
  const copyright = 'Copyright © 2022 Isabel K. Lee. All rights reserved.'

  return (
    <FooterContainer>
      <SmallP>{copyright.toUpperCase()}</SmallP>
      <SmallP>
        BUILT WITH{' '}
        <ExternalLink
          href={'https://www.sanity.io/docs/getting-started'}
          rel="nolink_referrer"
          target="_blank"
        >
          Sanity.io
        </ExternalLink>{' '}
        AND{' '}
        <ExternalLink
          href={'https://reactjs.org/docs/getting-started.html'}
          rel="nolink_referrer"
          target="_blank"
        >
          React.js
        </ExternalLink>
        .
      </SmallP>
    </FooterContainer>
  )
}
export default Footer
