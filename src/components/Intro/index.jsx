import React, {useState, useEffect} from 'react'
import * as Styled from '../../styles'
// import {IntroImage, ImageContainer} from './styles'
import sanityClient from '../../client.js'

const Intro = ({description}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "imageAsset"] {
            _id,
            altText,
            "category": category[0]->title,
            image{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => {
        let filteredImages = data.filter((image) => image.category === 'Intro')
        setImages(filteredImages)
      })
      .catch(console.error)
  }, [])

  const generateId = (element) => `id-${images.indexOf(element) + 1}`

  return (
    <>
      <Styled.P $position="relative" $zIndex={1}>
        {description.toUpperCase()}
      </Styled.P>
      {/* <ImageContainer> */}
      {images.map((image) => {
        return (
          <img
            key={image._id}
            id={generateId(image)}
            src={image.image.asset.url}
            alt={image.altText}
          />
        )
      })}
      {/* </ImageContainer> */}

      <Styled.SiteTitle>
        <Styled.H1>ISABEL K. LEE</Styled.H1>
        <Styled.H1>2022.</Styled.H1>
      </Styled.SiteTitle>
    </>
  )
}

export default Intro
