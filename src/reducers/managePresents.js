export function managePresents(state, action){
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'INCREASE':
    return { numberOfPresents: state.numberOfPresents + 1 } 
    default:
    return state
  }
}
