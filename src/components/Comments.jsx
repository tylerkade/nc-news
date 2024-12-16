import { useEffect, useState } from "react";

import { getCommentsByArticleId } from "../../api";

import "../css/Comments.css";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div role="alert">Loading Comments...</div>;
  }

  return (
    <>
      <ul className="comments-list">
        {comments.map((comment) => {
          const date = new Date(comment.created_at).toLocaleString();
          return (
            <li className="comment" key={comment.comment_id}>
              <div>
                <h4>{comment.author}</h4>
              </div>
              <div>{comment.body}</div>
              <p></p>
              <div>On {date}</div>
              <div>Votes: {comment.votes}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
