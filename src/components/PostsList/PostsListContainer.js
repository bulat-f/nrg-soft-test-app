import { connect } from 'react-redux';
import { getAllPosts, getPostIsLoading } from 'modules/posts';

import { PostsListView } from './PostsListView';

const mapStateToProps = (state) => ({
  posts: getAllPosts(state),
  isLoading: getPostIsLoading(state),
});
const mapDispatchToProps = null;

export const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsListView);
