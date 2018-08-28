export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			let new_friends = state.friends
			new_friends.push(action.friend)
			return {friends: new_friends}
		case 'REMOVE_FRIEND':
			new_friends = state.friends.filter(friend => friend.id != action.id)
			return {friends: new_friends}
		default:
			return state;
	}
}
