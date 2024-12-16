import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";

// CSS
import "./css/App.css";
// import "./css/borders.css";

function App() {
  return (
    <div id="main-content">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
