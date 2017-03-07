export function managePresents(state, action){
  
  switch(action.type) {
    case 'INCREASE':
      // const newState = Object.assign({}, )
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state
  }
}
