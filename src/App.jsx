import {useState} from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle, Wrapper, ColorCombos, Circle} from './styles'

const App = () => {
  const [color, setColor] = useState(null)

  const handleClick = () => setColor(ColorCombos[0])

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Circle onClick={handleClick} />
          <Route component={Home} path="/" exact />
          {/* <Route component={Post} path="/:slug" /> */}
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
