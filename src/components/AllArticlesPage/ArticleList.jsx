import ArticleCard from "./ArticleCard";

import "../../css/Card.css";

const ArticleList = ({ articles }) => {
  return (
    <>
      <nav aria-label="Articles">
        <ul className="list">
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ArticleList;
