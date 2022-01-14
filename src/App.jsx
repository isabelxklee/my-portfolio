import {useState} from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle, Wrapper, ColorCombos, Circle} from './styles'

const App = () => {
  const [colorIndex, setColorIndex] = useState(0)

  const handleClick = () => {
    setColorIndex((colorIndex) => (colorIndex === ColorCombos.length - 1 ? 0 : (colorIndex += 1)))
  }

  return (
    <>
      <GlobalStyle
        $color={ColorCombos[colorIndex]['color']}
        $backgroundColor={ColorCombos[colorIndex]['backgroundColor']}
      />
      <BrowserRouter>
        <Wrapper>
          <Circle onClick={handleClick} $color={ColorCombos[colorIndex]['color']} />
          <Route component={Home} path="/" exact />
          {/* <Route component={Post} path="/:slug" /> */}
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
