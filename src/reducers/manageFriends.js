export function manageFriends(state, action){
	let friends = []

	switch (action.type) {
    case 'ADD_FRIEND':
			friends = state.friends.slice()
			friends.push(action.friend)
      return {friends: friends}
    case 'REMOVE_FRIEND':
			friends = state.friends.filter(friend => (friend.id !== action.id))

			return {friends: friends}
		default:
      return state
  }
}
