import {useState} from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle, Wrapper, ColorCombos, Circle} from './styles'

const App = () => {
  const [colors, setColors] = useState(ColorCombos[0])

  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * ColorCombos.length)
    setColors(ColorCombos[randomIndex])
  }

  console.log(colors['color'], colors['backgroundColor'])

  return (
    <>
      <GlobalStyle $color={colors['color']} $backgroundColor={colors['backgroundColor']} />
      <BrowserRouter>
        <Wrapper>
          <Circle onClick={handleClick} $color={colors['color']} />
          <Route component={Home} path="/" exact />
          {/* <Route component={Post} path="/:slug" /> */}
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
