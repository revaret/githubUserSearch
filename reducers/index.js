import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userResults from './userResults';
import saveQuery from './saveQuery';
import searchInFlight from './searchInFlight';

export default combineReducers({
  userResults,
  searchInFlight,
  saveQuery,
  routing: routerReducer
});