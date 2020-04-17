import React from 'react';
import { Container } from 'semantic-ui-react';

import { Subreddits } from 'components/Subredits';
import { PostsList } from 'components/PostsList';

const App = () => {
  return (
    <Container>
      <Subreddits />
      <PostsList />
    </Container>
  );
};

export default App;
