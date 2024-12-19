import CommentCard from "./CommentCard";

import "../../css/Comments.css";

const Comments = ({ comments, fetchComments }) => {
  return (
    <>
      <ul className="comments-list">
        <CommentCard comments={comments} fetchComments={fetchComments}/>
      </ul>
    </>
  );
};

export default Comments;
