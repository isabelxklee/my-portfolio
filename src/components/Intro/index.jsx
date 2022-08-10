import React, {useState, useEffect} from 'react'
import {P, Box} from '../../styles'
import {IntroImage, ImageContainer} from './styles'
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
      .then((data) => setImages(data))
      .catch(console.error)
  }, [])

  const thisCategory = 'Intro'

  return (
    <Box>
      <P $position="relative" $zIndex={1}>
        {description.toUpperCase()}
      </P>
      <ImageContainer>
        {images &&
          images
            .filter((image) => image.category === thisCategory)
            .map((image) => (
              <IntroImage key={image._id} src={image.image.asset.url} alt={image.altText} />
            ))}
      </ImageContainer>
    </Box>
  )
}

export default Intro
