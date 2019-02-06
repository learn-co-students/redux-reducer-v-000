export function managePresents(state = {
  numberOfPresents: 0
}, action) {
  switch (action.type) {
  	case 'INCREASE':
  	  return { numberOfPresents: state.numberOfPresents + 1 };
  	default:
  	  return state;
  }
}
// managePresents reducer function criteria:
// returns the existing state if the action's type doesn't match a type in the reducer
// increases the number of presents if the action's type is 'INCREASE'