import React, {useState, useEffect} from 'react'
import {H1} from '../../styles'
import {Title} from './styles'
import Intro from '../../components/Intro'
import Press from '../Press'
// import Work from '../Work'
import About from '../About'
import Contact from '../Contact'
import Footer from '../../components/Footer'
import sanityClient from '../../client.js'

const Home = () => {
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

  const filterImages = (string) => {
    return images.filter((image) => image.category === string)
  }

  return (
    <>
      <Title>
        <H1>ISABEL K. LEE</H1>
        <H1>2022.</H1>
      </Title>
      <Intro images={filterImages('Intro')} />
      <Press />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
export default Home
