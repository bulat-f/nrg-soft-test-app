import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Subreddit } from './Subreddit';

const Container = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

export const SubredditsView = ({ fetchPost, resizeContainer }) => {
  const ref = useRef();
  const handleResize = useCallback(() => {
    resizeContainer(ref.current.offsetWidth);
  }, [ref, resizeContainer]);
  useEffect(() => {
    window.onresize = handleResize;
  }, [handleResize]);

  return (
    <Container ref={ref}>
      <Subreddit index={0} name="frontend" fetchPost={fetchPost} />
      <Subreddit index={1} name="reactjs" fetchPost={fetchPost} />
      <Subreddit index={2} name="vuejs" fetchPost={fetchPost} />
      <Subreddit index={3} name="angular" fetchPost={fetchPost} />
    </Container>
  );
};

SubredditsView.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  resizeContainer: PropTypes.func.isRequired,
};
