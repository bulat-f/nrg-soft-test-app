import { connect } from 'react-redux';
import { fetchArticleRequest, fetchArticleSuccess } from 'modules/articles';

import { SubredditsView } from './SubredditsView';

let id = 1;

const mapDispatchToProps = (dispatch) => ({
  fetchArticle: (subreddit) => {
    dispatch(fetchArticleRequest(subreddit));
    dispatch(fetchArticleSuccess({ id: id++, title: `${subreddit} ${id}` }));
  },
});

export const SubredditsContainer = connect(null, mapDispatchToProps)(SubredditsView);
