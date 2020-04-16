import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'modules/rootReducer';

function configureStore(initialState) {
  const middlewares = [];
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
}

export const store = configureStore();
