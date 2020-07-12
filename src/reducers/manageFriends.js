let friends = []

export function manageFriends(state, action){
	switch (action.type) {
    case 'ADD_FRIEND':
    	return {friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
    	let filteredFriends = state.friends.filter(friend => friend.id != action.id)
     
      return {friends: filteredFriends}
    default:
      return state;
  }
}
