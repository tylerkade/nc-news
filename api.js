import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-t13l.onrender.com/api",
});

const getArticles = ({ topic, sort_by, order, limit, page, popular }) => {
  const params = { topic, sort_by, order, limit, page, popular };
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const endpoint = `/articles${queryString ? `?${queryString}` : ""}`;

  return api.get(endpoint).then(({ data }) => {
    return data;
  });
};

const getArticleById = (article_id) => {
  const endpoint = `/articles/${article_id}`;
  return api.get(endpoint).then(({ data }) => {
    return data.article;
  });
};

const getCommentsByArticleId = (article_id) => {
  const endpoint = `/articles/${article_id}/comments`;
  return api.get(endpoint).then(({ data }) => {
    return data.comments;
  });
};

const patchArticleVotes = (article_id, vote) => {
  const endpoint = `/articles/${article_id}`;
  return api.patch(endpoint, { inc_votes: vote }).then(({ data }) => {
    return data.article.votes;
  });
};

const addComment = (article_id, comment) => {
  const endpoint = `/articles/${article_id}/comments`;
  return api.post(endpoint, comment).then(({ data }) => {
    return data.comment;
  });
};

const getTopics = () => {
  const endpoint = "/topics";
  return api.get(endpoint).then(({ data }) => {
    return data.topics;
  });
};

const getUsers = () => {
  const endpoint = "/users";
  return api.get(endpoint).then(({ data }) => {
    return data.users;
  });
};

const getUsersByUsername = (username) => {
  const endpoint = `/users/${username}`;
  return api.get(endpoint).then(({ data }) => {
    return data.user;
  });
};

const deleteCommentById = (id) => {
  const endpoint = `/comments/${id}`;
  return api.delete(endpoint);
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchArticleVotes,
  addComment,
  getTopics,
  getUsers,
  getUsersByUsername,
  deleteCommentById,
};
