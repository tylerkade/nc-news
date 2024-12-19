import { patchArticleVotes } from "../../../api";

const VotingHandler = (id, vote) => {
  return patchArticleVotes(id, vote).then((updatedArticle) => {
    return updatedArticle;
  });
};

export default VotingHandler;
