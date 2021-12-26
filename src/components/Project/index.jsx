import React from 'react'
import {Tag, ProjectImage} from './styles'
import {Box, P, Space} from '../../styles'

const Project = ({project}) => {
  return (
    <Box>
      <ProjectImage src={project.mainImage.asset.url} alt="" />
      <Space>
        <P>{project.title}</P>
      </Space>
      <Space>{project.tags && project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Space>
    </Box>
  )
}

export default Project
