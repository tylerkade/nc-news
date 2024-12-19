import ArticleCard from "./ArticleCard";

import "../../css/Card.css";

const ArticleList = ({ articles }) => {
  return (
    <>
      <ul className="list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
