import { useLocation, Link, useNavigate } from "react-router";
import { useState } from "react";

import "../../css/SortingButtons.css";

const SortingButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentParams = new URLSearchParams(location.search);
  const sort_by = currentParams.get("sort_by") || "created_at";
  const order = currentParams.get("order") || "DESC";
  const limit = currentParams.get("limit") || "10";

  const [selectedSort, setSelectedSort] = useState(sort_by || "None");
  const [selectedLimit, setSelectedLimit] = useState(limit || "None");

  const sortLink = (newSort_by) => {
    const params = new URLSearchParams(location.search);
    params.set("sort_by", newSort_by);
    return `?${params.toString()}`;
  };

  const toggleOrder = () => {
    const newOrder = order === "ASC" ? "DESC" : "ASC";
    currentParams.set("order", newOrder);
    navigate(`?${currentParams.toString()}`);
  };

  const limitLink = (newLimit) => {
    const params = new URLSearchParams(location.search);
    params.set("limit", newLimit);
    return `?${params.toString()}`;
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedSort(value);
    navigate(sortLink(value));
  };

  const handleLimitChange = (e) => {
    const value = e.target.value;
    setSelectedLimit(value);
    navigate(limitLink(value));
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="sort-dropdown">Sort by:</label>
        <select
          id="sort-dropdown"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="created_at">Published date</option>
          <option value="article_id">Article ID</option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment amount</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="order-button">Order:</label>
        <button id="order-button" onClick={toggleOrder}>
          {order}
        </button>
      </div>
      <div className="dropdown">
        <label htmlFor="limit-dropdown">Articles per page:</label>
        <select
          id="limit-dropdown"
          value={selectedLimit}
          onChange={handleLimitChange}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="dropdown">
        {/* <label htmlFor="page-dropdown">Page:</label>
        <select
          id="page-dropdown"
          value={selectedLimit}
          onChange={handleLimitChange}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select> */}
      </div>
    </div>
  );
};

export default SortingButtons;
