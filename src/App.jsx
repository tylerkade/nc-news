import { Routes, Route } from "react-router";

import Header from "./components/_AllPages/Header";
import Navbar from "./components/_AllPages/Navbar";
import Home from "./components/Home";
import Articles from "./components/AllArticlesPage/Articles";
import Article from "./components/IndividualArticle/Article";
import Topics from "./components/TopicsPage/Topics";
import UserLogin from "./components/UserPage/UserLogin";
import UserProfile from "./components/UserPage/UserProfile";
import Error from "./components/_AllPages/Error";
import Footer from "./components/_AllPages/Footer";

// CSS
import "./css/App.css";
// import "./css/borders.css";

function App() {
  return (
    <div id="main-content">
      <a href="#website-title" className="skip-to-content-link">
        Jump to top
      </a>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
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
