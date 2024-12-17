import { useEffect, useState } from "react";

import CommentCard from "./CommentCard";

import { getCommentsByArticleId } from "../../api";

import "../css/Comments.css";

const Comments = ({ comments }) => {
  return (
    <>
      <ul className="comments-list">
        <CommentCard comments={comments} />
      </ul>
    </>
  );
};

export default Comments;
