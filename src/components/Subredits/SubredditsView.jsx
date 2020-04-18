import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Subreddit } from './Subreddit';

const Container = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

export const SubredditsView = ({ fetchPost }) => (
  <Container>
    <Subreddit index={0} name="frontend" fetchPost={fetchPost} />
    <Subreddit index={1} name="reactjs" fetchPost={fetchPost} />
    <Subreddit index={2} name="vuejs" fetchPost={fetchPost} />
    <Subreddit index={3} name="angular" fetchPost={fetchPost} />
  </Container>
);

SubredditsView.propTypes = {
  fetchPost: PropTypes.func.isRequired,
};
