import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
// import Project from '../../components/Project'
import {ProjectContainer} from './styles'

const TechWriting = () => {
  const [techWritingPosts, setTechWritingPosts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "techWriting"]{
          _id,
          title,
          description,
          mainImage{
            asset->{
            url
          }
        }
      }`
      )
      .then((data) => setTechWritingPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      {techWritingPosts && (
        <ProjectContainer>
          {/* techWritingPosts.map((project) => <Project project={project} key={project._id} />) */}
          {techWritingPosts.map((post) => (
            <div key={post._id}>{post.title}</div>
          ))}
        </ProjectContainer>
      )}
    </>
  )
}
export default TechWriting
