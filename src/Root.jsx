import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #fafafa;
    font-size: 18px;
  }
`;

const Root = ({ store, persistor, children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default Root;
