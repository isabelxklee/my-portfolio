import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import Project from '../../components/Project'
import {ProjectContainer} from './styles'
import ToggleSection from '../../components/ToggleSection'

const Work = () => {
  const [projects, setProjects] = useState(null)
  const [display, setDisplay] = useState(false)

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
      <ToggleSection display={display} handleClick={handleClick} title={'work'} />
      <ProjectContainer>
        {projects &&
          display &&
          projects.map((project) => <Project project={project} key={project._id} />)}
      </ProjectContainer>
    </>
  )
}
export default Work
