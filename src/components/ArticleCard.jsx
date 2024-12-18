const ArticleCard = ({ article }) => {
  const date = new Date(article.created_at).toLocaleString();

  return (
    <a
      href={`/articles/${article.topic}/${article.article_id}`}
      className="card"
    >
      <li>
        <h3>{article.title}</h3>
        <h4>
          By {article.author}, published on {date}
        </h4>
        <h5>
          Topic: {article.topic} | comments: {article.comment_count} | Votes:{" "}
          {article.votes} | ID: {article.article_id}
        </h5>
      </li>
    </a>
  );
};

export default ArticleCard;
