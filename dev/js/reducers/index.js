/**
 * Created by User on 05.11.2016.
 */
import {combineReducers} from 'redux';
import UserReducer from './reducers-users';

const allReducers = combineReducers({
    user: UserReducer
});
export default allReducers;