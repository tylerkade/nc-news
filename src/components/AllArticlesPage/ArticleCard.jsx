const ArticleCard = ({ article }) => {
  const date = new Date(article.created_at).toLocaleString();

  return (
    <li className="card">
      <a
        href={`/articles/${article.topic}/${article.article_id}`}
        title={`Read more about ${article.title}`}
      >
        <h3>{article.title}</h3>
        <img
          src={article.article_img_url}
          alt={`Cover image for ${article.title}`}
        />
        <p>
          By {article.author}
        </p>
        <p>Published on {date}</p>
        <p>
          {article.topic} | {article.comment_count}{" "}
          {article.comment_count === 1 ? "comment" : "comments"} |{" "}
          {article.votes} Votes
        </p>
      </a>
    </li>
  );
};

export default ArticleCard;
