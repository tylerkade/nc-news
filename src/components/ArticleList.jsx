import { useEffect, useState } from "react";
import { getArticles } from "../../api";

import ArticleCard from "./ArticleCard";

import "../css/ArticleCard.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        if (articles.length === 0) {
          return <p>Error</p>;
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div role="alert">Loading Articles...</div>;
  }

  return (
    <>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
