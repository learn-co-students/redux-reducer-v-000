export function manageFriends(state, action){
  switch (action.type){
    case "ADD_FRIEND":
      let coolFriends = [...state.friends]
      coolFriends.push(action.friend)
      return {friends: coolFriends };
    case "REMOVE_FRIEND":
      let coolerFriends = [...state.friends]
      let indexToDelete = coolerFriends.findIndex(function(obj){
        return obj.id === action.id
      })
      coolerFriends.splice(indexToDelete, 1)
      return {friends: coolerFriends};
    default:
      return state;
  }
}
