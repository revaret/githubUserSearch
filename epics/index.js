import { combineEpics } from 'redux-observable';
import searchUsers from './searchUsers';
import clearSearchResults from './clearSearchResults';
import saveQuery from './saveQuery'

export default combineEpics(
  searchUsers,
  clearSearchResults,
  saveQuery
);