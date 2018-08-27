import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

const store = (initialState = {}, ...additionalMiddlewares) => {

  const sagaMiddleware = createSagaMiddleware();
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const middleware = [sagaMiddleware, ...additionalMiddlewares];
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept(reducers, () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
};

export default store();
