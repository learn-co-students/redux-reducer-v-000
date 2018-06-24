export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			return Object.assign({}, {friends: [...state.friends, action.friend]})
		case 'REMOVE_FRIEND':
			return Object.assign({}, {friends: state.friends.filter(friend => action.id !== friend.id)})
		default:
			return state;
	}
}