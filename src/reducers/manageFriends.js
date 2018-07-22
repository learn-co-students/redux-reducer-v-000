export function manageFriends (state, action) {
  let friends = []
  friends = [...state.friends]
  switch (action.type) {
    case 'ADD_FRIEND':
      friends.push({name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id})
      return {friends: [...friends]}
    case 'REMOVE_FRIEND':
      friends = friends.filter(function (friend) {
        return friend.id != action.id
      })
      return {friends: [...friends]}
    default:
      return state
  }
}
