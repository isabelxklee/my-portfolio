import React from "react";
import { SmallP, ExternalLink } from "../../styles";
import { FooterContainer } from "./styles";

const Footer = () => (
  <FooterContainer>
    <SmallP>Copyright © 2021 Isabel K. Lee. All rights reserved.</SmallP>
    <SmallP>
      Built with{" "}
      <ExternalLink
        href="https://reactjs.org/docs/getting-started.html"
        rel="nolink_referrer"
        target="_blank"
      >
        React.js
      </ExternalLink>{" "}
      and{" "}
      <ExternalLink
        href="https://www.sanity.io/docs/getting-started"
        rel="nolink_referrer"
        target="_blank"
      >
        Sanity.io.
      </ExternalLink>
    </SmallP>
  </FooterContainer>
);

export default Footer;
