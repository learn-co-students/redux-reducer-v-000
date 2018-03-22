export function manageFriends(state, action){
	let cloned_state = Object.assign({}, state);

	switch(action.type) {
		case 'ADD_FRIEND':		
			cloned_state.friends = state.friends.slice(0);
			cloned_state.friends.push(action.friend);
			return cloned_state
		case 'REMOVE_FRIEND':
			cloned_state.friends = state.friends.filter(friend=> friend.id != action.id)
			return cloned_state
		default:
			return state
	}
}
