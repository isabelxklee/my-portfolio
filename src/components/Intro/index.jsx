import React from 'react'
import {P, Box} from '../../styles'
import {IntroImage, ImageContainer} from './styles'

const Intro = ({images}) => (
  <Box>
    <P $position="relative" $zIndex={1}>
      {description.toUpperCase()}
    </P>
    <ImageContainer>
      {images &&
        images.map((image) => (
          <IntroImage key={image._id} src={image.image.asset.url} alt={image.altText} />
        ))}
    </ImageContainer>
  </Box>
)

export default Intro
