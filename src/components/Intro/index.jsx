import React from 'react'
import {P, Box} from '../../styles'
import {IntroImage, ImageContainer} from './styles'

const Intro = ({images}) => {
  const description =
    'internet-surfing, code-wrangling, non-binary software developer. BACKGROUND IN product design, EDUCATION, AND KICKING A**.'
  return (
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
}

export default Intro
