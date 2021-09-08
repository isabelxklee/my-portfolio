import React, { useState } from "react";
import {
  SectionHeader,
  H2,
  P,
  Box,
  ShowIcon,
  HideIcon,
  IconContainer,
} from "../../styles";

const About = () => {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay((display) => !display);
  };

  return (
    <>
      <SectionHeader>
        <H2>about</H2>
        <IconContainer onClick={handleClick}>
          {display ? <HideIcon /> : <ShowIcon />}
        </IconContainer>
      </SectionHeader>
      {display && (
        <Box>
          <P>
            Hello, fellow Internet surfer! Thank you for visiting my corner of
            the web. 🌞
          </P>
          <P>
            My name is Isabel K. Lee and I’m a full-stack developer. I go by
            they/them pronouns and have a background in design and product
            strategy. I really enjoy working on design systems, web
            applications, and early- to mid-stage startups.
          </P>
          <P>
            Before I started my tech career, I studied Middle East foreign
            policy and philosophy in Montreal. I care deeply about political
            activism, cooking for others, and taking care of my large, adult
            son, Finklestein (he's actually a cat).
          </P>
          <P>Let’s build something together!</P>
        </Box>
      )}
    </>
  );
};

export default About;
