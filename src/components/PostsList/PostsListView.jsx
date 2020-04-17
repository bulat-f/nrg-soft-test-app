import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Placeholder } from 'semantic-ui-react';
import { Post } from 'components/Post';

export const PostsListView = ({ posts, isLoading }) => (
  <Card fluid>
    <Card.Content>
      {posts.length === 0 && !isLoading && <Card.Header textAlign="center">No posts loaded yet</Card.Header>}
      <List divided relaxed>
        {posts.map((article) => (
          <Post key={article.id} {...article} />
        ))}
        {isLoading && (
          <List.Item>
            <List.Icon name="reddit" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                </Placeholder>
              </List.Header>
              <List.Description as="a">
                <Placeholder>
                  <Placeholder.Line></Placeholder.Line>
                </Placeholder>
              </List.Description>
            </List.Content>
          </List.Item>
        )}
      </List>
    </Card.Content>
  </Card>
);

PostsListView.propTypes = {
  posts: PropTypes.array.isRequired,
};
