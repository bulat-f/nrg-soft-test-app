import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { capitalize } from 'lodash';
import { connect } from 'react-redux';
import { addOne, togglePause, getPositionX } from 'modules/subreddits';

const Container = styled.div`
  position: absolute;
  top: ${({ index }) => `${index * 49}px`};
  padding: 8px;
  margin: 8px 0;
  width: 160px;
  background: #ccc;
  color: #fff;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #ccd;
  }
  transition: all 0.25s linear;
`;

const SubredditView = ({ index, name, positionX, addOne, togglePause, fetchPost }) => {
  const handleTogglePause = useCallback(() => togglePause(name), [name, togglePause]);
  const handleClick = useCallback(() => fetchPost(name), [name, fetchPost]);
  const ref = useRef();

  useEffect(() => {
    addOne(name, ref.current.parentElement.offsetWidth);
  }, [name, addOne, ref]);

  return (
    <Container
      ref={ref}
      index={index}
      onMouseOver={handleTogglePause}
      onMouseOut={handleTogglePause}
      onClick={handleClick}
      style={{ left: positionX }}
    >
      {capitalize(name)}
    </Container>
  );
};

SubredditView.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  positionX: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  togglePause: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { name }) => ({ positionX: getPositionX(state, name) });
const mapDispatchToProps = { addOne, togglePause };

const SubredditContainer = connect(mapStateToProps, mapDispatchToProps)(SubredditView);

export { SubredditContainer as Subreddit };
