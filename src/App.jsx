import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle, Wrapper} from './styles'
import ColorChanger from './components/ColorChanger'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Header /> */}
        <Wrapper>
          <ColorChanger />
          <Route component={Home} path="/" exact />
          {/* <Route component={Post} path="/:slug" /> */}
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
