import { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import { useLocation, useParams } from "react-router";

import ArticleCard from "./ArticleCard";
import Error from "../_AllPages/Error";

import "../../css/Card.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const currentParams = new URLSearchParams(location.search);

  const { topic } = useParams();
  const sort_by = currentParams.get("sort_by");
  const order = currentParams.get("order");
  const limit = currentParams.get("limit");

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    getArticles({ topic, sort_by, order, limit })
      .then(({ articles, totalCount }) => {
        setArticles(articles);
        setTotalArticles(totalCount);
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
  }, [location.search]);

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
