export function manageFriends(state={friends: []}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      console.log("action", action)
      console.log("action.type", action.type)
      debugger
      return {friends: state.friends.push(action.friends)}
    default:
      return state;
  }
}
