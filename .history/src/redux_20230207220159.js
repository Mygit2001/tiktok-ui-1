import rootReducer from './store/reducer/rootReducer';
import {createStore, applyMiddleware } from 'redux';

const reduxConfig = () => {
   const store = createStore(rootReducer, applyMiddleware);
};
