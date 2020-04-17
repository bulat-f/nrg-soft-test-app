import { connect } from 'react-redux';
import { fetchArticleRequest } from 'modules/articles';

import { SubredditsView } from './SubredditsView';

const mapDispatchToProps = (dispatch) => ({
  fetchArticle: async (subreddit) => {
    dispatch(fetchArticleRequest(subreddit));
  },
});

export const SubredditsContainer = connect(null, mapDispatchToProps)(SubredditsView);
