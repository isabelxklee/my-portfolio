import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle, Wrapper} from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Route component={Home} path="/" exact />
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
