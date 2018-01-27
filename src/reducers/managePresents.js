export function managePresents(state, action){
}
// let action = {type: 'Random_Action_Type'}
// let state = {number: 0}
function managePresents(state, action) {
  
  switch (action.type){
    case 'INCREASE':
      return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})
      default:
        return state
  
  }

}