import axios from "axios";

const api = axios.create({
  baseURL: "https://my-nc-news-t13l.onrender.com/api",
});

const getArticles = (topic) => {
  let endpoint = "/articles";
  if (topic) {
    endpoint = endpoint + `?topic=${topic}`;
  }
  return api.get(endpoint).then(({ data }) => {
    return data.articles;
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

const addAComment = (article_id, comment) => {
  const endpoint = `/articles/${article_id}/comments`;
  return api
    .post(endpoint, comment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      return err;
    });
};

const getTopics = () => {
  const endpoint = "/topics";
  return api.get(endpoint).then(({ data }) => {
    return data.topics;
  });
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  patchArticleVotes,
  addAComment,
  getTopics,
};
