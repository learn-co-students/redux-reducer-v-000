export function manageFriends(state, action){
	switch(action.type) {
		case 'ADD_FRIEND':
			return {friends: [...state.friends, {hometown: 'Boston', id: 101, name: "Joe"}] }
		case 'REMOVE_FRIEND':
			return {friends: state.friends.filter(friends => friends.id !== 101) }
		default:
			return state;
	}
}
