import React from 'react' // {useState, useEffect}
import {H1} from '../../styles'
import {
  Title,
  TitleImage,
  TitleImageContainer,
  DoodleComputer,
  DoodleGlasses,
  DoodleHat,
  DoodleRat,
} from './styles'
// import Work from '../Work'
import About from '../About'
import Contact from '../Contact'
import Footer from '../../components/Footer'
// import sanityClient from '../../client.js'
import nameImage from '../../assets/name-image.png'
import doodleComputer from '../../assets/doodle_computer.png'
import doodleGlasses from '../../assets/doodle_glasses.png'
import doodleHat from '../../assets/doodle_hat.png'
import doodleRat from '../../assets/doodle_rat.png'

const Home = () => {
  // const [images, setImages] = useState([])

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "imageAsset"] {
  //           _id,
  //           altText,
  //           title,
  //           "category": category[0]->title,
  //           image{
  //           asset->{
  //             url
  //           }
  //         }
  //       }`
  //     )
  //     .then((data) => setImages(data))
  //     .catch(console.error)
  // }, [])

  // const filterImages = (string) => {
  //   return images.filter((image) => image.category === string)
  // }

  return (
    <>
      <Title>
        {/* <h1 style={{opacity: 0, margin: 0}}>Isabel K. Lee</h1> */}
        <DoodleComputer src={doodleComputer} alt="" />
        <DoodleGlasses src={doodleGlasses} alt="" />
        <DoodleHat src={doodleHat} alt="" />
        <DoodleRat src={doodleRat} alt="" />
        <TitleImageContainer className="title-image-container">
          <TitleImage src={nameImage} alt="Isabel K. Lee" />
          <span>
            <H1>Welcome to Klee Time!</H1>
          </span>
        </TitleImageContainer>
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
