import { useState } from "react";

import { addAComment } from "../../api";
import Error from "./Error";

import "../css/CommentForm.css";

const CommentForm = ({ article_id, updateComments }) => {
  const [formData, setFormData] = useState({
    username: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    addAComment(article_id, formData)
      .then((newComment) => {
        let { response, message } = newComment;

        if (response) {
          setError({
            status: 404,
            statusText: "Unable to process comment.\n Check username is valid.",
          });
          setIsSubmitting(false);
          return;
        } else if (message === "Network Error") {
          setError({
            status: 504,
            statusText: "Network Error",
          });

          setIsSubmitting(false);
          return;
        }

        setIsSubmitting(false);
        updateComments(newComment);
        setFormData({ username: "", body: "" });
        setError(null);
      })
      .catch(() => {
        setIsSubmitting(false);
        setError(true);
      });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form-group">
        <label htmlFor="username">
          <h4>Username</h4>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="comment-form-group">
        <label htmlFor="body">
          <h4>Comment</h4>
        </label>
        <textarea
          type="text"
          id="body"
          name="body"
          placeholder="Add a comment"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>
      <div className="comment-form-group">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Comment"}
        </button>
      </div>
      {error && <Error error={error} />}
    </form>
  );
};

export default CommentForm;
