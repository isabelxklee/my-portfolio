import React, {useState, useEffect} from 'react'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'
import {PressContainer, PressItem, PressLink} from './styles'
import * as Styled from '../../styles'

const Press = () => {
  const [pressItems, setPressItems] = useState(null)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "press"] | order(date desc) {
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

  const dateFormatter = (date) => {
    const newDate = new Date(date)
    const options = {month: 'long', year: 'numeric'}
    return newDate.toLocaleDateString('en-US', options)
  }

  return (
    <>
      <ToggleSection display={display} handleClick={handleClick} title={'press'} />
      {display && (
        <>
          <PressContainer>
            {pressItems.map((item) => (
              <PressItem key={item._id}>
                <PressLink href={item.url} target="_blank" rel="nolink_referrer">
                  {item.title} 🔗
                </PressLink>
                <Styled.SpaceP>{item.source}</Styled.SpaceP>
                <Styled.Tag>{dateFormatter(item.date)}</Styled.Tag>
              </PressItem>
            ))}
          </PressContainer>
        </>
      )}
    </>
  )
}

export default Press
