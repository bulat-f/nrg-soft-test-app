import React from 'react';
import PropTypes from 'prop-types';
import { Subreddit } from './Subreddit';

export const SubredditsView = ({ fetchPost }) => (
  <div>
    <Subreddit name="frontend" fetchPost={fetchPost} />
    <Subreddit name="reactjs" fetchPost={fetchPost} />
    <Subreddit name="vuejs" fetchPost={fetchPost} />
    <Subreddit name="angular" fetchPost={fetchPost} />
  </div>
);

SubredditsView.propTypes = {
  fetchPost: PropTypes.func.isRequired,
};
