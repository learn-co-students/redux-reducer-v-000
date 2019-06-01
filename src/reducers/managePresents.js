export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {...state,   //use spread operator to make copy of state & then update numberOfPresents in the copy
        numberOfPresents: state.numberOfPresents + 1
    }
    default:
      return state;
  }
}


//learn's solution gave state a default value & used Object.assign to make copy of state

//export function managePresents(state = {
//  numberOfPresents: 0,
//}, action) {
//  switch(action.type) {
//    case 'INCREASE':
//      return Object.assign({}, state, {
//        numberOfPresents: state.numberOfPresents + 1
//      });
//      default:
//        return state;
//  }
//}