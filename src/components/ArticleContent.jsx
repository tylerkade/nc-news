import { useState } from "react";
import VotingHandler from "./VotingHandler";

import "../css/ArticleContent.css";
import "../css/VotingArrows.css";
import Error from "./Error";

const ArticleContents = ({ article, upvote, downvote }) => {
  const [votes, setVotes] = useState(article.votes);
  const [activeVote, setActiveVote] = useState(null);
  const [error, setError] = useState(false);

  const handleUpVote = () => {
    setError(false);
    if (activeVote === "up") {
      VotingHandler(article.article_id, -1)
        .then(() => setActiveVote(null))
        .catch(() => {
          setVotes((currVotes) => currVotes + 1);
          setActiveVote(null);
          setError(true);
        });

      setVotes((currVotes) => currVotes - 1);
      setActiveVote(null);
    } else {
      const adjustment = activeVote === "down" ? 2 : 1;
      VotingHandler(article.article_id, adjustment).catch(() => {
        setVotes((currVotes) => currVotes - adjustment);
        setActiveVote(null);
        setError(true);
      });

      setVotes((currVotes) => currVotes + adjustment);
      setActiveVote("up");
    }
  };

  const handleDownVote = () => {
    setError(false);
    if (activeVote === "down") {
      VotingHandler(article.article_id, 1)
        .then(() => setActiveVote(null))
        .catch(() => {
          setVotes((currVotes) => currVotes - 1);
          setActiveVote(null);
          setError(true);
        });

      setVotes((currVotes) => currVotes + 1);
      setActiveVote(null);
    } else {
      const adjustment = activeVote === "up" ? -2 : -1;
      VotingHandler(article.article_id, adjustment).catch(() => {
        setVotes((currVotes) => currVotes - adjustment);
        setActiveVote(null);
        setError(true);
      });
      setVotes((currVotes) => currVotes + adjustment);
      setActiveVote("down");
    }
  };

  const date = new Date(article.created_at).toLocaleString();
  return (
    <>
      <div className="articleTitle">
        <h2>{article.title}</h2>
      </div>
      <div className="articleData">
        <h3>in {article.topic}</h3>
        <h3>By {article.author}</h3>
        <h3>Published on {date}</h3>
        <h4>Votes: {votes}</h4>
        <div className="voting buttons">
          <button id="upvote-button" onClick={handleUpVote}>
            <img
              src={upvote}
              alt="upvote arrow"
              id={`up-arrow-${activeVote === "up" ? "active" : ""}`}
              className="vote-arrows"
            />
          </button>
          <button id="downvote-button" onClick={handleDownVote}>
            <img
              src={downvote}
              alt="downvote arrow"
              id={`down-arrow-${activeVote === "down" ? "active" : ""}`}
              className="vote-arrows"
            />
          </button>
          {error && (
            <Error
              error={{ status: 503, statusText: "Unable to process vote." }}
            />
          )}
        </div>
      </div>
      <div className="articleImage">
        <img src={article.article_img_url} alt={article.title} />
      </div>
      <div className="articleBody">
        <h4>{article.body}</h4>
      </div>
    </>
  );
};

export default ArticleContents;
