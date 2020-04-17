import { connect } from 'react-redux';
import { fetchPostRequest } from 'modules/posts';

import { SubredditsView } from './SubredditsView';

const mapDispatchToProps = (dispatch) => ({
  fetchPost: async (subreddit) => {
    dispatch(fetchPostRequest(subreddit));
  },
});

export const SubredditsContainer = connect(null, mapDispatchToProps)(SubredditsView);
