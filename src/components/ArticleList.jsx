import { useEffect, useState } from "react";
import { getArticles } from "../../api";

import ArticleCard from "./ArticleCard";

import "../css/Card.css";
import { useParams } from "react-router";
import Error from "./Error";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { topic } = useParams();

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    getArticles(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError({
          status: 404,
          statusText: "No articles found for that topic",
        });
        setIsLoading(false);
        return;
      });
  }, []);

  if (isLoading) {
    return <div role="alert">Loading Articles...</div>;
  }

  return (
    <>
      <ul className="list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
      {error && <Error error={error} />}
    </>
  );
};

export default ArticleList;
