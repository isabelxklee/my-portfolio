import React, { useState, useEffect } from "react";
import { SectionHeader, H2 } from "../../styles";
import sanityClient from "../../client.js";
import Project from "../../components/Project";
import { ProjectContainer, DisplayIcon } from "./styles";

const Work = () => {
  const [projects, setProjects] = useState(null);

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

  return (
    <>
      <SectionHeader>
        <H2>work</H2>
        <DisplayIcon>Hide</DisplayIcon>
      </SectionHeader>
      <ProjectContainer>
        {projects &&
          projects.map((project) => (
            <Project project={project} key={project._id} />
          ))}
      </ProjectContainer>
    </>
  );
};
export default Work;
