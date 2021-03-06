import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './root';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));