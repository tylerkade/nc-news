import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topics from "./components/Topics";
import UserLogin from "./components/UserLogin";
import UserProfile from "./components/UserProfile";
import Error from "./components/Error";
import Footer from "./components/Footer";

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
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic/:article_id" element={<Article />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path="/account/login" element={<UserLogin />} />
        <Route path="/account/" element={<UserProfile />} />{" "}
        <Route
          path="*"
          element={
            <Error error={{ status: 404, statusText: "Invalid page" }} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
