import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { capitalize } from 'lodash'

const Container = styled.div`
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
`;

export const Subreddit = ({ name, fetchPost }) => {
  const handleClick = useCallback(() => fetchPost(name), [name, fetchPost]);

  return <Container onClick={handleClick}>{capitalize(name)}</Container>;
};

Subreddit.propTypes = {
  name: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired,
};
