import React from "react";
import { H1, P, ExternalLink } from "../../styles";
import { Title } from "./styles";
import Intro from "../../components/Intro";
import Work from "../Work";
import About from "../About";
import Contact from "../Contact";

const Home = () => {
  return (
    <>
      <Title>
        <H1>isabel k. lee</H1>
        <H1>2021.</H1>
      </Title>
      <Intro />
      <Work />
      <About />
      <Contact />
      <P>Copyright © 2021 Isabel K. Lee. All rights reserved.</P>
      <P>
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
      </P>
    </>
  );
};
export default Home;
