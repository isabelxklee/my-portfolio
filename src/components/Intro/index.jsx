import React from 'react'
import {P, Box} from '../../styles'
import {IntroImage, ImageContainer} from './styles'

const Intro = ({images}) => {
  return (
    <Box>
      <P $position="relative" $zIndex={1}>
        internet-surfing, code-wrangling, non-binary software developer.
      </P>
      <ImageContainer>
        {images &&
          images.map((image) => (
            <IntroImage
              key={image._id}
              src={image.image.asset.url}
              alt={image.altText}
              $right={Math.random() * -5}
              $bottom={Math.random() * -10}
            />
          ))}
      </ImageContainer>
      <P>BACKGROUND IN product design, EDUCATION, AND KICKING A**.</P>
    </Box>
  )
}

export default Intro
