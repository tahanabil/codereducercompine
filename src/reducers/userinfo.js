/** @format */

export default function userInfoReducer(state = {}, action) {
  switch (action.type) {
    case 'create':
      return Object.assign({}, state, { Actionx: action.type });
    case 'ban':
      return Object.assign({}, state, { Actionx: action.type });
    case 'delete':
      return Object.assign({}, state, { Actionx: action.type });
    default:
      return Object.assign({}, state);
  }
}
