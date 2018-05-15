export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        friends: [
          ...state.friends,
          {
            name: action.friend.name,
            hometown: action.friend.hometown,
            id: action.friend.id
          }
        ]
      }
    case 'REMOVE_FRIEND':
      let toDelete = new Set([action.id]);
      let newArray = state.friends.filter(obj => !toDelete.has(obj.id));
      return {
        friends: newArray
      }
    default:
      return state;
  }
}
