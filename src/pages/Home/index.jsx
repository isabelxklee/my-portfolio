import React from "react";
import { H1 } from "../../styles";
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
    </>
  );
};
export default Home;
