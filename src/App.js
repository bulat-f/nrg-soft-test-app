import React from 'react';
import { Container } from 'semantic-ui-react';

import { Subreddits } from 'components/Subredits';
import { ArticlesList } from 'components/ArticlesList';

const App = () => {
  return (
    <Container>
      <Subreddits />
      <ArticlesList />
    </Container>
  );
};

export default App;
