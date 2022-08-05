import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
// import Project from '../../components/Project'
import {ProjectContainer} from '../Work/styles'
import {PressItem} from '../Press/styles'
import * as Styled from '../../styles'

const TechWriting = () => {
  const [techWritingPosts, setTechWritingPosts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "techWriting"]{
          _id,
          title,
          description,
          url,
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

  console.log(techWritingPosts)

  return (
    <>
      {techWritingPosts && (
        <ProjectContainer>
          {techWritingPosts.map((post) => (
            <PressItem key={post._id}>
              <img src={post.mainImage.asset.url} alt="" />
              <Styled.H3>
                <Styled.ExternalLink href={post.url} target="_blank" rel="nolink_referrer">
                  {post.title} 🔗
                </Styled.ExternalLink>
              </Styled.H3>
              <Styled.SpaceP>{post.description}</Styled.SpaceP>
            </PressItem>
          ))}
        </ProjectContainer>
      )}
    </>
  )
}
export default TechWriting
