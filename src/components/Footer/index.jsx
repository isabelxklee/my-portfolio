import React from 'react'
import {SmallP, ExternalLink} from '../../styles'
import {FooterContainer, Left, Right} from './styles'

const Footer = () => {
  const copyright = 'Copyright © 2022 Isabel K. Lee. All rights reserved.'

  return (
    <FooterContainer>
      <Left>
        <SmallP>{copyright.toUpperCase()}</SmallP>
      </Left>
      <Right>
        <SmallP>
          BUILT WITH{' '}
          <ExternalLink
            href={'https://www.sanity.io/docs/getting-started'}
            rel="nolink_referrer"
            target="_blank"
          >
            SANITY.IO
          </ExternalLink>{' '}
          AND{' '}
          <ExternalLink
            href={'https://reactjs.org/docs/getting-started.html'}
            rel="nolink_referrer"
            target="_blank"
          >
            REACT.JS
          </ExternalLink>
          .
        </SmallP>
      </Right>
    </FooterContainer>
  )
}
export default Footer
