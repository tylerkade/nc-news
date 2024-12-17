import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById, getCommentsByArticleId } from "../../api";

import ArticleContents from "./ArticleContent";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

import upvote from "../icons/upvote.svg";
import downvote from "../icons/downvote.svg";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
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
