import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { capitalize } from 'lodash';

const animation = (distance) => keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(${distance}px);
  }
  100% {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  padding: 8px;
  margin: 8px 0;
  width: 160px;
  background: #ccc;
  color: #fff;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  animation: ${({ distance }) => animation(distance)} 8s linear 0s infinite;
  &:hover {
    background: #ccd;
    animation-play-state: paused;
  }
  transition: all 0.25s linear;
`;

const SubredditView = ({ index, name, fetchPost }) => {
  const [distance, setDistance] = useState(2000);
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      const selfWidth = node.getBoundingClientRect().width;
      const containerWidth = node.parentElement.getBoundingClientRect().width;
      setDistance(containerWidth - selfWidth);
    }
  }, []);
  const handleClick = useCallback(() => fetchPost(name), [name, fetchPost]);

  return (
    <Container ref={measuredRef} index={index} onClick={handleClick} distance={distance}>
      {capitalize(name)}
    </Container>
  );
};

SubredditView.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired,
};

export { SubredditView as Subreddit };
