import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById } from "../../api";

const CommentCard = ({ comments, fetchComments }) => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [processingId, setProcessingId] = useState(null);

  const deleteHandler = (comment_id) => {
    setProcessingId(comment_id);
    deleteCommentById(comment_id)
      .then(() => {
        // This is massively propdrilling I think, but
        // unsure how else to update comments when one
        // is deleted otherwise
        fetchComments();
      })
      .catch((err) => {
        setProcessingId(null);
        const { message } = err;
        if (message === "Network Error") {
          setError({
            status: 504,
            statusText: message,
          });
        } else {
          setError({
            status: 404,
            statusText: "Unable to process request.",
          });
        }
      });
  };

  if (error) {
    const { status, statusText } = error;
    alert(`${status}: ${statusText} \nUnable to process request.`);
  }

  return (
    <>
      <div>
        {comments.map((comment) => {
          const { created_at, author, comment_id, body, votes } = comment;
          const date = new Date(created_at).toLocaleString();
          return (
            <li
              className={
                processingId === comment_id ? "comment-deleting" : "comment"
              }
              key={comment_id}
            >
              <div className="comment-element">
                <h4>{author}</h4>
              </div>
              <div className="comment-element">{body}</div>
              <p></p>
              <div className="comment-element">On {date}</div>
              <div className="comment-element">Votes: {votes}</div>
              {user && user.username === author ? (
                <pre
                  className="comment-delete"
                  onClick={() => {
                    deleteHandler(comment_id);
                  }}
                >
                  {processingId === comment_id ? "Deleting..." : "Delete"}
                </pre>
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default CommentCard;
