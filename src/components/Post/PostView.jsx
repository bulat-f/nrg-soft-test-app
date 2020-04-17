import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Icon } from 'semantic-ui-react';

export const PostView = ({ title, url, subreddit, liked, handleLike, handleRemove }) => (
  <List.Item>
    <List.Icon name="reddit" size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header as="a" href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </List.Header>
      <List.Description as="a">{subreddit}</List.Description>
    </List.Content>
    <List.Icon verticalAlign="middle">
      <Button.Group basic>
        <Button icon onClick={handleLike}>
          <Icon name={`thumbs up ${liked ? '' : ' outline'}`} />
        </Button>
        <Button icon onClick={handleRemove}>
          <Icon name="trash alternate outline" />
        </Button>
      </Button.Group>
    </List.Icon>
  </List.Item>
);

PostView.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  handleLike: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

PostView.defaultProps = {
  liked: false,
};
