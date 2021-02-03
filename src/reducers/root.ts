import {combineReducers} from 'redux';
import userList from './userListReducer';
import selectedUser from './selectedUserReducer';

export default combineReducers({
  userList,
  selectedUser
});