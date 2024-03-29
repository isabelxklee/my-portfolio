import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
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

  const transformImageURL = (URL) => `${URL}?w=1000`
  const truncateString = (string) => `${string.substring(0, 120)}...`

  return (
    <>
      {techWritingPosts && (
        <Styled.ThreeColumnGrid>
          {techWritingPosts.map((post) => (
            <PostContainer key={post._id}>
              <a href={post.url} target="_blank" rel="noreferrer">
                <MainImage src={transformImageURL(post.mainImage.asset.url)} alt={post.title} />
              </a>
              <div style={{padding: '20px'}}>
                <Styled.H3>
                  <Styled.ExternalLink href={post.url} target="_blank" rel="noreferrer">
                    {post.title} 🔗
                  </Styled.ExternalLink>
                </Styled.H3>
                <Styled.SpaceP>{truncateString(post.description)}</Styled.SpaceP>
              </div>
            </PostContainer>
          ))}
        </Styled.ThreeColumnGrid>
      )}
    </>
  )
}
export default TechWriting
