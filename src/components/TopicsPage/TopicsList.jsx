import { useState, useEffect } from "react";
import { getTopics } from "../../../api";

import TopicCard from "./TopicCard";

import "../../css/Card.css";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div role="alert">Loading Topics...</div>;
  }

  return (
    <>
      <ul className="list">
        {topics.map((topic) => {
          return <TopicCard key={topic.slug} topic={topic} />;
        })}
      </ul>
    </>
  );
};

export default TopicsList;
