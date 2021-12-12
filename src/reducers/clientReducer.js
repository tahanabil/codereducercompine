/** @format */

export default function clientReducer(state = {}, action) {
  switch (action.type) {
    case 'newClient':
      return Object.assign({}, state, { Actionx: action.type });
    case 'statusActive':
      return Object.assign({}, state, { Actionx: action.type });
    default:
      return { ...state };
  }
}
