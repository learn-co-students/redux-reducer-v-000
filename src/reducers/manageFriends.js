export function manageFriends(state, action) {
	switch (action.type) {
		case 'ADD_FRIEND':
			return {
				...state,
				friends: [...state.friends, action.friend]
			}
		case 'REMOVE_FRIEND':
			const friendIndexToRemove = state.friends.findIndex(friend => friend.id === action.id)
			return {
				friends: [
					...state.friends.slice(0, friendIndexToRemove),
					...state.friends.slice(friendIndexToRemove + 1)
				]
			}
		default:
			return state
	}
}
