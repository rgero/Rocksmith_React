import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dlcReducer from '../reducers/dlc';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    
    const store = createStore(dlcReducer,
       composeEnhancers(applyMiddleware(thunk))
    );

    return store;

}

