import * as ActionTypes from '../ActionTypes';

export default function searchInFlight(state = [], action) {
  switch (action.type) {
    case ActionTypes.SAVE_QUERY:
    {
      if(!state.includes(action.payload.username))
        state.push(action.payload.username)
      return state;
    }
    default:
      return state;
  }
}