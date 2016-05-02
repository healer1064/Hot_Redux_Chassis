import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

export default function configureStore(initialState = {}) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: (state) => Object.keys(state).reduce((json, key) => {
      json[key] = Iterable.isIterable(state[key]) ? state[key].toJS() : state[key];
      return json;
    }, {})
  });

  const store = createStore(
    require('../reducers').default,
    initialState,
    compose(
      applyMiddleware(promiseMiddleware, thunk, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
