import React, { useState, useEffect } from "react";
import { SectionHeader, H2, DisplayIcon } from "../../styles";
import sanityClient from "../../client.js";
import Project from "../../components/Project";
import { ProjectContainer } from "./styles";

const Work = () => {
  const [projects, setProjects] = useState(null);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          _id,
          title,
          "slug": slug.current,
          "tags": tags[]->title,	
          mainImage{
            asset->{
            url
          }
        }
      }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const handleClick = () => {
    setDisplay((display) => !display);
  };

  return (
    <>
      <SectionHeader>
        <H2>work</H2>
        <DisplayIcon onClick={handleClick}>
          {display ? "Hide" : "Show"}
        </DisplayIcon>
      </SectionHeader>
      <ProjectContainer>
        {projects &&
          display &&
          projects.map((project) => (
            <Project project={project} key={project._id} />
          ))}
      </ProjectContainer>
    </>
  );
};
export default Work;
