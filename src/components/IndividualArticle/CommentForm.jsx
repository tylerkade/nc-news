import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { addComment } from "../../../api";
import Error from "../_AllPages/Error";

import "../../css/CommentForm.css";

const CommentForm = ({ article_id, updateComments }) => {
  const { user } = useContext(UserContext);
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
      username: user.username,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    addComment(article_id, formData)
      .then((newComment) => {
        setError(null);
        setIsSubmitting(false);
        updateComments(newComment);
        setFormData({ username: "", body: "" });
      })
      .catch((err) => {
        const { message } = err;
        setIsSubmitting(false);
        if (message === "Network Error") {
          setError({
            status: 504,
            statusText: "Network Error",
          });
        } else {
          setError({
            status: 404,
            statusText: "Unable to process comment.\n Check username is valid.",
          });
        }
      });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {user && user.username ? (
        <div>
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
        </div>
      ) : (
        <div className="login-message">Login to leave a comment</div>
      )}
      {error && <Error error={error} />}
    </form>
  );
};

export default CommentForm;
