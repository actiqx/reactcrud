import { combineReducers } from 'redux';
import posts from './post_reducers'
const rootReducer = combineReducers({
  posts
});

export default rootReducer;
