import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import {GlobalStyle, Wrapper} from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Wrapper>
          <Route component={Home} path="/" exact />
          {/* <Route component={Post} path="/:slug" /> */}
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
