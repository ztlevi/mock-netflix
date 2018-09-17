import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
