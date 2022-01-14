import react, {useState} from 'react'
import {Circle} from './styles'

const ColorChanger = () => {
  const [color, setColor] = useState(null)

  const colorCombos = [
    {color: '282828', 'background-color': 'ECD2BB'},
    {color: 'D10000', 'background-color': 'F4C7B9'},
    {color: 'DBFF00', 'background-color': '94A9DF'},
    {color: 'C56A00', 'background-color': 'F4F2EB'},
  ]

  const handleClick = () => setColor(colorCombos[0])

  console.log(color)

  return <Circle onClick={handleClick} />
}

export default ColorChanger
