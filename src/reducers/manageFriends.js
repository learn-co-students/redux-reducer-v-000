export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return  {friends:[...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
    console.log("FRIEND:" + action.id)
    console.log("________________FLTER____________")
      console.log(state.friends.filter(friend => action.id !== friend.id))
      console.log("________________SLICE____________")
      console.log({...state.friends.slice(0, action.friend), ...state.friends.slice(action.friend+1)})
      console.log("________________FULL_____________")
      console.log(state.friends)
      return state {friends: state.friends.filter(friend => action.id !== friend.id)}
    default:
      return state;
  }
}
