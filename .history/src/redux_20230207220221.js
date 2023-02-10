import rootReducer from './store/reducer/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk
const reduxConfig = () => {
   const store = createStore(rootReducer, applyMiddleware());
   return;
};
