import CommentForm from "./CommentForm";

const CommentCard = ({ comments }) => {
  return (
    <>
      <div>
        {comments.map((comment) => {
          const date = new Date(comment.created_at).toLocaleString();
          return (
            <li className="comment" key={comment.comment_id}>
              <div className="comment-element">
                <h4>{comment.author}</h4>
              </div>
              <div className="comment-element">{comment.body}</div>
              <p></p>
              <div className="comment-element">On {date}</div>
              <div className="comment-element">
                ID: {comment.comment_id} | Votes: {comment.votes}
              </div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default CommentCard;
