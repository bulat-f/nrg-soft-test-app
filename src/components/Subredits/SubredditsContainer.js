import { connect } from 'react-redux';
import { fetchPostRequest } from 'modules/posts';
import { resizeContainer } from 'modules/subreddits';

import { SubredditsView } from './SubredditsView';

const mapDispatchToProps = {
  resizeContainer,
  fetchPost: fetchPostRequest,
};

export const SubredditsContainer = connect(null, mapDispatchToProps)(SubredditsView);
