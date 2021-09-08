import React from "react";
import { Tag, ProjectImage } from "./styles";
import { Box } from "../../styles";

const Project = ({ project }) => {
  return (
    <Box>
      <ProjectImage src={project.mainImage.asset.url} alt="" />
      <p>{project.title}</p>
      {project.tags && project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </Box>
  );
};

export default Project;
