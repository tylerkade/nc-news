import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import ArticleList from "./ArticleList";
import SortingButtons from "./SortingButtons";

import { getArticles } from "../../../api";
import Error from "../_AllPages/Error";

const Articles = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentParams = new URLSearchParams(location.search);

  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { topic } = useParams();
  const sort_by = currentParams.get("sort_by") || "created_at";
  const order = currentParams.get("order") || "DESC";
  const limit = parseInt(currentParams.get("limit") || "10");
  const page = parseInt(currentParams.get("p") || "1");

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getArticles({ topic, sort_by, order, limit, page })
      .then(({ articles, totalCount }) => {
        setArticles(articles);
        setTotalArticles(totalCount);
        setIsLoading(false);
      })
      .catch((err) => {
        const {
          response: {
            data: { msg },
          },
          status,
        } = err;
        setError({ status, statusText: msg });
        setIsLoading(false);
      });
  }, [location.search]);

  const updateParams = (newParams) => {
    const params = new URLSearchParams(currentParams);
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    navigate(`?${params.toString()}`);
  };

  return (
    <>
      <SortingButtons
        totalArticles={totalArticles}
        limit={limit}
        page={page}
        sort_by={sort_by}
        order={order}
        updateParams={updateParams}
      />
      <h2>Articles</h2>
      {isLoading ? <div role="alert">Loading Articles...</div> : <></>}
      {error ? <Error error={error} /> : <></>}
      <ArticleList articles={articles} />
    </>
  );
};

export default Articles;
