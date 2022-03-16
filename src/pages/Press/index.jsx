import React, {useState, useEffect} from 'react'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'
import {PressContainer, PressItem} from './styles'
// import * as Styled from '../../styles'

const Press = () => {
  const [pressItems, setPressItems] = useState(null)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "press"] {
            _id,
            title,
            url,
            'tag': tags[0]->title,
            date,
            source
        }`
      )
      .then((data) => setPressItems(data))
      .catch(console.error)
  }, [])

  const handleClick = () => {
    setDisplay((display) => !display)
  }

  console.log(pressItems)

  return (
    <>
      <ToggleSection display={display} handleClick={handleClick} title={'press'} />
      {display && (
        <>
          <PressContainer>
            {pressItems.map((item) => (
              <PressItem key={item._id}>hello world</PressItem>
            ))}
          </PressContainer>
        </>
      )}
    </>
  )
}

export default Press
