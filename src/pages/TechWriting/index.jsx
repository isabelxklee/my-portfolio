import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {PressContainer} from '../Press/styles'
import * as Styled from '../../styles'
import {MainImage, PostContainer} from './styles'

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
        <PressContainer>
          {techWritingPosts.map((post) => (
            <PostContainer key={post._id}>
              <MainImage src={post.mainImage.asset.url} alt="" />
              <div style={{padding: '20px'}}>
                <Styled.H3>
                  <Styled.ExternalLink href={post.url} target="_blank" rel="nolink_referrer">
                    {post.title} 🔗
                  </Styled.ExternalLink>
                </Styled.H3>
                <Styled.SpaceP>{post.description}</Styled.SpaceP>
              </div>
            </PostContainer>
          ))}
        </PressContainer>
      )}
    </>
  )
}
export default TechWriting
