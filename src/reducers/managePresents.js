let state = {numberOfPresents: 1}
let action = {type: 'ADD_PRESENT'}

export function managePresents(state, action){

  switch (action.type) {
   case 'INCREASE':
     return {numberOfPresents: state.numberOfPresents + 1}
   default:
     return state;
 }
}
