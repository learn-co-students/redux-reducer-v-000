export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return { numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state;
  }
}
//Write a function called managePresents that takes in an action and the previous state as its argument. 