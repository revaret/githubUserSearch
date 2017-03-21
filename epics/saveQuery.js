import { Observable } from 'rxjs/Observable';
import { replace } from 'react-router-redux';
import * as ActionTypes from '../ActionTypes';
import { saveQuery } from '../actions';
import { ajax } from 'rxjs/observable/dom/ajax';

export default function searchUsers(action$) {
  return action$.ofType(ActionTypes.SEARCHED_USERS)
    .map(action => action.payload.query)
    .filter(q => !!q)
    .debounceTime(3000)
    .map(saveQuery)
};