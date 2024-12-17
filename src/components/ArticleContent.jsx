import { useState } from "react";
import VotingHandler from "./VotingHandler";

import "../css/ArticleContent.css";
import "../css/VotingArrows.css";

const ArticleContents = ({ article, upvote, downvote }) => {
  const [votes, setVotes] = useState(article.votes);
  const [activeVote, setActiveVote] = useState(null);

  const handleUpVote = () => {
    if (activeVote === "up") {
      VotingHandler(article.article_id, -1).catch(() => {
        setVotes((currVotes) => currVotes + 1);
      });

      setVotes((currVotes) => currVotes - 1);
      setActiveVote(null);
    } else {
      const adjustment = activeVote === "down" ? 2 : 1;
      VotingHandler(article.article_id, adjustment).catch(() => {
        setVotes((currVotes) => currVotes - adjustment);
      });

      setVotes((currVotes) => currVotes + adjustment);
      setActiveVote("up");
    }
  };

  const handleDownVote = () => {
    if (activeVote === "down") {
      VotingHandler(article.article_id, 1).catch(() => {
        setVotes((currVotes) => currVotes - 1);
      });
      setVotes((currVotes) => currVotes + 1);
      setActiveVote(null);
    } else {
      const adjustment = activeVote === "up" ? -2 : -1;
      VotingHandler(article.article_id, adjustment).catch(() => {
        setVotes((currVotes) => currVotes - adjustment);
      });
      setVotes((currVotes) => currVotes + adjustment);
      setActiveVote("down");
    }
  };

  const date = new Date(article.created_at).toLocaleString();
  return (
    <>
      <div className="articleData">
        <h2>{article.title}</h2>
        <h3>in {article.topic}</h3>
        <h3>By {article.author}</h3>
        <h3>Published on {date}</h3>
        <h4>Votes: {votes}</h4>
        <h4>
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
        </h4>
      </div>
      <div className="articleImage">
        <img src={article.article_img_url} />
      </div>
      <div className="articleBody">
        <h4>{article.body}</h4>
      </div>
    </>
  );
};

export default ArticleContents;
