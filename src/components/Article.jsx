import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../../api";

import arrow from "../icons/arrow.svg";

import "../css/Article.css";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
        if (article.length === 0) {
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div role="alert">Loading Article...</div>;
  }

  const date = new Date(article.created_at).toLocaleString();

  return (
    <div className="container">
      <div className="articleData">
        <h2>{article.title}</h2>
        <h3>in {article.topic}</h3>
        <h3>By {article.author}</h3>
        <h3>Published on {date}</h3>
        <h4>Votes: {article.votes}</h4>
        <h4>
          <img src={arrow} alt="" id="up-arrow" className="vote-arrows" />
          <img src={arrow} alt="" id="down-arrow" className="vote-arrows" />
        </h4>
        <p>placeholder arrows</p>
      </div>
      <div className="articleImage">
        <img src={article.article_img_url} />
      </div>
      <div className="articleBody">
        <h4>{article.body}</h4>
      </div>
      <div className="articleComments">[Comments WIP]</div>
      <div className="addComment">[Add comment WIP]</div>
    </div>
  );
};

export default Article;
