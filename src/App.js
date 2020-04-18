import React from 'react';
import { Container } from 'semantic-ui-react';

import { Subreddits } from 'components/Subredits';
import { Toolbar } from 'components/Toolbar';
import { PostsList } from 'components/PostsList';

const App = () => {
  return (
    <Container>
      <Subreddits />
      <Toolbar />
      <PostsList />
    </Container>
  );
};

export default App;
