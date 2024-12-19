const ArticleCard = ({ article }) => {
  const date = new Date(article.created_at).toLocaleString();

  return (
    <a
      href={`/articles/${article.topic}/${article.article_id}`}
      className="card"
    >
      <li>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt="" />
        <h4>
          By {article.author}, published on {date}
        </h4>
        <h5>
          {article.topic} | {article.comment_count}{" "}
          {article.comment_count === 1 ? "comment" : "comments"} |{" "}
          {article.votes} Votes
        </h5>
        <h6>ID: {article.article_id}</h6>
      </li>
    </a>
  );
};

export default ArticleCard;
