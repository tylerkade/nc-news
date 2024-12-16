const ArticleCard = ({ article }) => {
  const date = new Date(article.created_at).toLocaleString();

  return (
    <div className="article-card">
      <li>
        <a href={`/articles/${article.topic}/${article.article_id}`}>
          <h3>{article.title}</h3>
        </a>
        <h4>
          By {article.author}, published on {date}
        </h4>
        <h5>
          {article.topic} | comments: {article.comment_count}
        </h5>
      </li>
    </div>
  );
};

export default ArticleCard;
