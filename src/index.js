// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import rootSaga from './sagas';
import './index.css';
import App from './containers/App';

// Create saga middleware
const sagaMiddleWare = createSagaMiddleware();

// Create store and mount middleware
const store = createStore(
    rootReducer,
    applyMiddleware( sagaMiddleWare )
);

// Run the saga
sagaMiddleWare.run( rootSaga );

function Root() {
    return (
        <Provider store={ store }>
            <App />
        </Provider>
    );
}

ReactDOM.render(
    <Root />,
    document.getElementById( 'root' )
);
