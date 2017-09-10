export function managePresents(state, action){

  switch (action.type) {
    case 'INCREASE':
      let newAction = Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})
      return newAction
    default:
      return state;
  }

}
