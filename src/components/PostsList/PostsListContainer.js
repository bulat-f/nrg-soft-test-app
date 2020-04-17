import { connect } from 'react-redux';
import { getAllArticles, getArticleIsLoading } from 'modules/articles';

import { PostsListView } from './PostsListView';

const mapStateToProps = (state) => ({
  posts: getAllArticles(state),
  isLoading: getArticleIsLoading(state),
});
const mapDispatchToProps = null;

export const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsListView);
