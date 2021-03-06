import React, {useState, useEffect} from 'react'
import ToggleSection from '../../components/ToggleSection'
import sanityClient from '../../client.js'
import {PressContainer, PressItem, MetadataContainer} from './styles'
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
    const options = {month: 'short', year: 'numeric'}
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
                <div>
                  <Styled.H3>
                    {item.url ? (
                      <Styled.ExternalLink href={item.url} target="_blank" rel="nolink_referrer">
                        {item.title} 🔗
                      </Styled.ExternalLink>
                    ) : (
                      item.title
                    )}
                  </Styled.H3>
                  <Styled.SpaceP>{item.source}</Styled.SpaceP>
                </div>
                <MetadataContainer>
                  <Styled.Tag>{dateFormatter(item.date)}</Styled.Tag>
                  <Styled.Tag>{item.tag}</Styled.Tag>
                </MetadataContainer>
              </PressItem>
            ))}
          </PressContainer>
        </>
      )}
    </>
  )
}

export default Press
