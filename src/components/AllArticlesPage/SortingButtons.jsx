import "../../css/SortingButtons.css";

const SortingButtons = ({
  totalArticles,
  limit,
  page,
  sort_by,
  order,
  updateParams,
}) => {
  const totalPages = Math.ceil(totalArticles / limit);

  const handleSortChange = (e) => updateParams({ sort_by: e.target.value });
  const toggleOrder = () =>
    updateParams({ order: order === "ASC" ? "DESC" : "ASC" });
  const handleLimitChange = (e) =>
    updateParams({ limit: e.target.value, p: 1 });
  const handlePageChange = (e) => updateParams({ p: e.target.value });

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="sort-dropdown">Sort by:</label>
        <select id="sort-dropdown" value={sort_by} onChange={handleSortChange}>
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
        <select id="limit-dropdown" value={limit} onChange={handleLimitChange}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="page-dropdown">Page:</label>
        <select id="page-dropdown" value={page} onChange={handlePageChange}>
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
          {page > totalPages && (
            <option key={page} value={page}>
              {page}
            </option>
          )}
        </select>
      </div>
    </div>
  );
};

export default SortingButtons;
