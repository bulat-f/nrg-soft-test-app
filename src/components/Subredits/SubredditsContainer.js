import { connect } from 'react-redux';
import { fetchPostRequest } from 'modules/posts';

import { SubredditsView } from './SubredditsView';

const mapDispatchToProps = {
  fetchPost: fetchPostRequest,
};

export const SubredditsContainer = connect(null, mapDispatchToProps)(SubredditsView);
