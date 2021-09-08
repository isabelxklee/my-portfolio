import "./App.css";
import Post from "./components/Post";
import AllPosts from "./components/AllPosts";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={Post} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
