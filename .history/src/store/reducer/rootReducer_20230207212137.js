import appReducer from './appReducer';
import { combineReducers, applyMiddleware } from 'redux';
const rootReducer = combineReducers({
    app : appReducer
});
e