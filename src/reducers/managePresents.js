export function managePresents(state, action){
  // if (action.type === 'INCREASE') {
  //   return { numberOfPresents: state.numberOfPresents + 1 }
  // }
  switch (action.type) {
    case 'INCREASE' :
      return { numberOfPresents: state.numberOfPresents + 1 }
    default :
      return state
  }
}
