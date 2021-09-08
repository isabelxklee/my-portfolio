import React, { useState, useEffect } from "react";
import { Box, H2 } from "../../styles";
import sanityClient from "../../client.js";
import Project from "../../components/Project";

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
      <Box>
        <H2>work</H2>
        {projects &&
          projects.map((project) => (
            <Project project={project} key={project._id} />
          ))}
      </Box>
    </>
  );
};
export default Work;
