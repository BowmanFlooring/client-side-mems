import { combineReducers } from 'redux';

import posts from './posts.js';

// Takes all individual reducers that we have and combines them to
// create a single reduceer  
export default combineReducers({ posts });