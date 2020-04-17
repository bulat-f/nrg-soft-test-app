import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subreddit = styled.div`
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

export const SubredditsView = ({ fetchPost }) => (
  <div>
    <Subreddit onClick={() => fetchPost('react')}>React</Subreddit>
    <Subreddit onClick={() => fetchPost('angular')}>Angular</Subreddit>
  </div>
);

SubredditsView.propTypes = {
  fetchPost: PropTypes.func.isRequired,
};
