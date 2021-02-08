import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducer.js';

export const store = createStore(reducer, composeWithDevTools());
