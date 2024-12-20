import "../../css/Card.css";

const TopicCard = ({ topic }) => {
  return (
    <li className="card">
      <a
        href={`/articles/${topic.slug}`}
        title={`Get all articles in ${topic.slug}`}
      >
          <h3 id="topic-name">{topic.slug}</h3>
          <p>{topic.description}</p>
      </a>
    </li>
  );
};

export default TopicCard;
