

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newFriend = [...state.friends]
      newFriend.push(action.friend)
      return {friends: newFriend};
    case 'REMOVE_FRIEND':
      let oldFriend = [...state.friends]
      let indexFriend = oldFriend.findIndex(function(obj){
        return obj.id === action.id
      })
      oldFriend.splice(indexFriend, 1)
      return {friends: oldFriend}
    default:
      return state;
  }
}
