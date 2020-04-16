import { connect } from 'react-redux';
import { random } from 'lodash';
import { fetchArticleRequest, fetchArticleSuccess } from 'modules/articles';
import { fetchArticles } from 'api';

import { SubredditsView } from './SubredditsView';

const mapDispatchToProps = (dispatch) => ({
  fetchArticle: async (subreddit) => {
    dispatch(fetchArticleRequest(subreddit));
    const {
      data: { dist, children },
    } = await fetchArticles(subreddit);
    const { data } = children[random(dist - 1)];

    dispatch(fetchArticleSuccess(data));
  },
});

export const SubredditsContainer = connect(null, mapDispatchToProps)(SubredditsView);
