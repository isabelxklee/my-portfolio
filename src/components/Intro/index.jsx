import React from "react";
import { P, Box } from "../../styles";
import {
  IntroImage1,
  IntroImage2,
  IntroImage3,
  ImageContainer,
} from "./styles";

const Intro = () => (
  <Box>
    <P>internet-surfing, code-wrangling, non-binary software developer.</P>
    <ImageContainer>
      <IntroImage1
        src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1613618318/7CD766F4-0FED-4919-890F-253F6C26282E_xlrthb.png"
        alt=""
      />
      <IntroImage2
        src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1613618255/IMG_9197_qpwl2b.png"
        alt=""
      />
      <IntroImage3
        src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1614901889/fantasy_land_ahlbmo.png"
        alt=""
      />
    </ImageContainer>
    <P>BACKGROUND IN product design, EDUCATION, AND KICKING A**.</P>
  </Box>
);

export default Intro;
