import appReducer from './appReducer';
import { combineReducers, applyMiddleware } from 'redux';
const rootReducer = combineReducers(appReducer)