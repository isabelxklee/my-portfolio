import React from 'react'
import {H1} from '../../styles'
import {Title} from './styles'
import Intro from '../../components/Intro'
import Work from '../Work'
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
            category,
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

  console.log(images)
  
  return (
    <>
      <Title>
        <H1>isabel k. lee</H1>
        <H1>2021.</H1>
      </Title>
      <Intro />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
export default Home
