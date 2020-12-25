import { combineReducers } from 'redux';
import blog from './blog';
import app from './app';

const rootReducer = combineReducers({
    blog,
    app,

});

export default rootReducer;