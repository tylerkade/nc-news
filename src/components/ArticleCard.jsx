const ArticleCard = ({ article }) => {
    // console.log(article.article_id);
    
  return (
    <div className="article-card">
      <li>
        <a href={`/articles/${article.topic}/${article.article_id}`}>
          <h3>{article.title}</h3>
        </a>
      </li>
    </div>
  );
};

export default ArticleCard;
