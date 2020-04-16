import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Placeholder } from 'semantic-ui-react';

export const ArticlesListView = ({ articles, isLoading }) => (
  <Card fluid>
    <Card.Content>
      <List divided relaxed>
        {articles.map((article) => (
          <List.Item key={article.id}>
            <List.Icon name="reddit" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{article.title}</List.Header>
              <List.Description as="a">{article.subreddit}</List.Description>
            </List.Content>
          </List.Item>
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

ArticlesListView.propTypes = {
  articles: PropTypes.array.isRequired,
};
