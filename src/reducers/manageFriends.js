let state = {friends: []}

export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			return Object.assign({}, state, {friends: [...state.friends, action.friend]})
		case 'REMOVE_FRIEND':
			const idx = state.friends.findIndex(friend => friend.id === action.id)
		 	return Object.assign({}, state, {friends: [...state.friends.slice(0, idx),
          ...state.friends.slice(idx + 1)]})
		default: 
			return state
	}
}
