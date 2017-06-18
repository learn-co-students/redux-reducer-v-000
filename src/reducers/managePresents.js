export function managePresents(state, action){
  let presentUpdate;
  switch (action.type) {
    case 'INCREASE':
      presentUpdate = Object.assign(...state, { numberOfPresents: state.numberOfPresents + 1 })
      break;
    default: presentUpdate = state

  }
  return presentUpdate
}
