import React from 'react';
import PropTypes from 'prop-types';
import { Card, List } from 'semantic-ui-react';

export const ArticlesListView = ({ articles }) => (
  <Card fluid>
    <Card.Content>
      <List divided relaxed>
        {articles.map((article) => (
          <List.Item key={article.id}>
            <List.Icon name="reddit" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{article.title}</List.Header>
              <List.Description as="a">Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Card.Content>
  </Card>
);

ArticlesListView.propTypes = {
  articles: PropTypes.array.isRequired,
};
