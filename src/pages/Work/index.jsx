import React, {useState, useEffect} from 'react'
import {SectionHeader, H2} from '../../styles'
import sanityClient from '../../client.js'
import Project from '../../components/Project'
import {ProjectContainer} from './styles'
import ToggleDisplay from '../../components/ToggleDisplay'

const Work = () => {
  const [projects, setProjects] = useState(null)
  const [display, setDisplay] = useState(true)

  const handleClick = () => {
    setDisplay((display) => !display)
  }

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
      .catch(console.error)
  }, [])

  return (
    <>
      <SectionHeader id="work">
        <H2>work</H2>
        <ToggleDisplay display={display} handleClick={handleClick} />
      </SectionHeader>
      <ProjectContainer>
        {projects &&
          display &&
          projects.map((project) => <Project project={project} key={project._id} />)}
      </ProjectContainer>
    </>
  )
}
export default Work
