import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById, getCommentsByArticleId } from "../../api";

import ArticleContents from "./ArticleContent";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Error from "./Error";

import upvote from "../icons/upvote.svg";
import downvote from "../icons/downvote.svg";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        let { response, status } = article;

        if (response) {
          setError({ status: status, statusText: response.data.msg });
          setIsLoading(false);
          return;
        } else {
          setArticle(article);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    if (article && article.article_id) {
      getCommentsByArticleId(article.article_id).then((fetchedComments) => {
        setComments(fetchedComments);
      });
    }
  }, [article]);

  const updateComments = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  if (isLoading) {
    return <div role="alert">Loading Article...</div>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="article-container">
      <ArticleContents article={article} upvote={upvote} downvote={downvote} />
      <div className="articleComments">
        <Comments upvote={upvote} downvote={downvote} comments={comments} />
      </div>
      <div className="addComment">
        <CommentForm
          article_id={article.article_id}
          updateComments={updateComments}
        />
      </div>
    </div>
  );
};

export default Article;
