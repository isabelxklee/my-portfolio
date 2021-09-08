import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <div>
          <Route component={Home} path="/" exact />
          {/* <Route component={Post} path="/:slug" /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
