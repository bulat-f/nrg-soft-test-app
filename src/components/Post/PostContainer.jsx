import React from 'react';
import PropTypes from 'prop-types';
import { PostView } from './PostView';
import { useCallback } from 'react';

export const PostContainer = ({ id, ...postProps }) => {
  const handleLike = useCallback(() => {
    console.log('Like', id);
  }, [id]);
  const handleRemove = useCallback(() => {
    console.log('Remove', id);
  }, [id]);
  return <PostView {...postProps} handleLike={handleLike} handleRemove={handleRemove} />;
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
};
