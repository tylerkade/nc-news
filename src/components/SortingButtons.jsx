import { useLocation, Link } from "react-router";
import { useState } from "react";

import "../css/SortingButtons.css";

const SortingButtons = () => {
  const location = useLocation();

  const currentParams = new URLSearchParams(location.search);
  const sort_by = currentParams.get("sort_by") || "created_at";
  const order = currentParams.get("order") || "DESC";

  const [isSort_byOpen, setIsSort_byOpen] = useState(false);

  const sortLink = (newSort_by) => {
    const params = new URLSearchParams(location.search);
    params.set("sort_by", newSort_by);
    return `?${params.toString()}`;
  };

  const toggleOrder = () => {
    const newOrder = order === "ASC" ? "DESC" : "ASC";
    currentParams.set("order", newOrder);
    return `?${currentParams.toString()}`;
  };

  const toggleSortByDropdown = () => {
    setIsSort_byOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button onClick={toggleSortByDropdown}>
          Sort by: {sort_by || "None"}
        </button>
        {isSort_byOpen && (
          <div className="dropdown-options">
            <Link to={sortLink("created_at")}>Published date</Link>
            <Link to={sortLink("article_id")}>Article ID</Link>
            <Link to={sortLink("title")}>Title</Link>
            <Link to={sortLink("topic")}>Topic</Link>
            <Link to={sortLink("author")}>Author</Link>
            <Link to={sortLink("votes")}>Votes</Link>
            <Link to={sortLink("comment_count")}>Comment amount</Link>
          </div>
        )}
      </div>
      <div className="dropdown">
        <Link to={toggleOrder()}>
          <button>Order: {order}</button>
        </Link>
      </div>
    </div>
  );
};

export default SortingButtons;
