import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removePost, likePost } from 'modules/posts';
import { PostView } from './PostView';

const PostContainer = ({ id, likePost, removePost, ...postProps }) => {
  const handleLike = useCallback(() => likePost(id), [id, likePost]);
  const handleRemove = useCallback(() => removePost(id), [id, removePost]);
  return <PostView {...postProps} handleLike={handleLike} handleRemove={handleRemove} />;
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = { likePost, removePost };

const EnhancedPostContainer = connect(null, mapDispatchToProps)(PostContainer);

export { EnhancedPostContainer as PostContainer };
