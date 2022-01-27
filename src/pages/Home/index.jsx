import React, {useState, useEffect} from 'react'
import {H1} from '../../styles'
import {Title, TitleImage} from './styles'
import Intro from '../../components/Intro'
// import Work from '../Work'
import About from '../About'
import Contact from '../Contact'
import Footer from '../../components/Footer'
import sanityClient from '../../client.js'
import nameImage from '../../assets/name-image.png'

const Home = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "imageAsset"] {
            _id,
            altText,
            title,
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

  const filterImages = (string) => {
    return images.filter((image) => image.category === string)
  }

  console.log(images)

  return (
    <>
      <Title>
        <TitleImage src={nameImage} alt="Isabel K. Lee" />
        {/* <H1>Isabel K. Lee</H1> */}
      </Title>
      {/* <Intro images={filterImages('Intro')} /> */}
      {/* <Work /> */}
      <About />
      <Contact />
      <Footer />
    </>
  )
}
export default Home
