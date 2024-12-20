import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

import { getArticles } from "../../api";

import ArticleCard from "./AllArticlesPage/ArticleCard";

import "../css/Home.css";
import "../css/Card.css";
import Error from "./_AllPages/Error";

function Home() {
  const { user } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const popular = "true";

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArticles({ popular })
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError({ status: 404, statusText: "Not found" });
      });
  }, []);
  // Bug: if multiple articles have the same number of votes, it
  // will fetch and display all of them

  return (
    <header id="Home">
      <div className="border-text">
        {user && user.username ? (
          <>
            <h2>Welcome, {user.username}</h2>
          </>
        ) : (
          <>
            <h2>Welcome to NC News</h2>
          </>
        )}
        <h3>Click 'All Articles' to view the all news</h3>
        <h3>Here are the most popular articles in each topic:</h3>
        {isLoading ? (
          <>
            <div role="alert">Loading Popular Articles...</div>
            <div className="loader"></div>
          </>
        ) : (
          <></>
        )}
        {error ? <Error error={error} /> : <></>}
      </div>
      <nav aria-label="Articles">
        <ul className="list">
          {articles.map((article) => (
            <div key={article.article_id} className="list-popular">
              <h2>In {article.topic}</h2>
              <ArticleCard article={article} />
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Home;
