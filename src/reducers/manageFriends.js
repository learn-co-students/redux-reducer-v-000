export function manageFriends(state={friends:[]}, action){

  switch(action.type) {
    case "ADD_FRIEND" :
      let arr =  state.friends
      let narr = []
      return {friends: narr.push(arr, action.friend)}
    case "REMOVE_FRIEND":
      return {friends: state.friends.map(f => {if(f.id !== action.id){return f}}).filter(o => !!o)}
    default:
      return state;
  }
}
