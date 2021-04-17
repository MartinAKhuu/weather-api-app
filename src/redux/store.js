import { createStore, combineReducers } from 'redux';
import { weather } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
    weather,
}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, composeWithDevTools());