import {combineReducers} from 'redux';
import userReducer from './users';

const allReducers = combineReducers({
    persons: userReducer
});

export default allReducers;