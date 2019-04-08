export function manageFriends(state, action){
  switch (action.type) {
  case 'ADD_FRIEND':
    let oa1 = Object.assign({}, state);
    oa1.friends.push(action.friend);
    return oa1;
  case 'REMOVE_FRIEND':
    let temparr = state.friends.filter( el => el.id !== action.id);
    let newobj = {...state, friends: temparr}
    return newobj;
    // return {numberOfPresents: state.numberOfPresents + 1}
  default:
    return state;
}
}
