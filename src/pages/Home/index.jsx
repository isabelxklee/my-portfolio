import React, {useState, useEffect} from 'react'
import Intro from '../../components/Intro'
import Accordion from '../../components/Accordion'
import Footer from '../../components/Footer'
import TechWriting from '../TechWriting'
import Press from '../Press'
import About from '../About'
import Contact from '../Contact'
import sanityClient from '../../client.js'

const Home = () => {
  const [aboutCopy, setAboutCopy] = useState(null)
  const [description, setDescription] = useState('')

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] {
            _id,
            intro,
            about
        }`
      )
      .then((data) => {
        setDescription(data[0].intro)
        setAboutCopy(data[0].about)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <Intro description={description} />
      <Accordion title={'Tech Writing'}>
        <TechWriting />
      </Accordion>
      <Accordion title={'Press'}>
        <Press />
      </Accordion>
      <Accordion title={'About'}>
        <About aboutCopy={aboutCopy} />
      </Accordion>
      <Accordion title={'Contact'}>
        <Contact />
      </Accordion>
      <Footer />
    </>
  )
}

export default Home
