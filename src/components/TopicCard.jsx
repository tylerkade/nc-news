import "../css/Card.css";

const TopicCard = ({ topic }) => {
  return (
    <a href={`/articles/${topic.slug}`} className="card">
      <li>
        <h3>{topic.slug}</h3>
        <p>{topic.description}</p>
      </li>
    </a>
  );
};

export default TopicCard;
