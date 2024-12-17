import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../../api";

import ArticleContents from "./ArticleContent";
import Comments from "./Comments";

import upvote from "../icons/upvote.svg";
import downvote from "../icons/downvote.svg";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div role="alert">Loading Article...</div>;
  }

  return (
    <div className="article-container">
      <ArticleContents article={article} upvote={upvote} downvote={downvote} />
      <div className="articleComments">
        <Comments
          article_id={article.article_id}
          upvote={upvote}
          downvote={downvote}
        />
      </div>
      <div className="addComment">[Add comment WIP]</div>
    </div>
  );
};

export default Article;
