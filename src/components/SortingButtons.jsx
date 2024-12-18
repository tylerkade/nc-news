import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

import "../css/SortingButtons.css";

const SortingButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentParams = new URLSearchParams(location.search);
  const sort_by = currentParams.get("sort_by") || "created_at";
  const order = currentParams.get("order") || "DESC";

  const [isSort_byOpen, setIsSort_byOpen] = useState(false);

  const handleSort_byChange = (newSort_by) => {
    currentParams.set("sort_by", newSort_by);
    navigate({ search: currentParams.toString() });
    setIsSort_byOpen(false);
  };

  const toggleOrder = () => {
    const newOrder = order === "ASC" ? "DESC" : "ASC";
    currentParams.set("order", newOrder);
    navigate({ search: currentParams.toString() });
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
            <a href="#" onClick={() => handleSort_byChange("created_at")}>
              Published date
            </a>
            <a href="#" onClick={() => handleSort_byChange("article_id")}>
              Article ID
            </a>
            <a href="#" onClick={() => handleSort_byChange("title")}>
              Title
            </a>
            <a href="#" onClick={() => handleSort_byChange("topic")}>
              Topic
            </a>
            <a href="#" onClick={() => handleSort_byChange("author")}>
              Author
            </a>
            <a href="#" onClick={() => handleSort_byChange("votes")}>
              Votes
            </a>
            <a href="#" onClick={() => handleSort_byChange("comment_count")}>
              Comment amount
            </a>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={toggleOrder}>Order: {order}</button>
      </div>
    </div>
  );
};

export default SortingButtons;
