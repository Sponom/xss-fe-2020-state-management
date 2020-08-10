import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import counter from "./reducers";
import { logger } from './middlewares'


const store = createStore(counter, applyMiddleware(thunk, logger));

export default store;
