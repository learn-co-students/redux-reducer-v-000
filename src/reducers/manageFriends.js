export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      let returnObject = Object.assign({},state)//creates new object from old object
      returnObject.friends.push(action.friend)//pushes the new friend onto the friends array inside the object
      return  returnObject
      case "REMOVE_FRIEND":
        //const result = state.friends.filter(friend => friend.id !== action.id)
        //return  {friends: result}
        return  {friends: state.friends.filter(friend => friend.id !== action.id)}
    default:
      return state;
  }// end switch
}
