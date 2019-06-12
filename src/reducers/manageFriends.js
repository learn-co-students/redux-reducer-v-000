export function manageFriends(state = { friends: [] }, action) {
	// console.log(state);

	switch (action.type) {
		case 'ADD_FRIEND':
			return {
				friends: [ ...state.friends, action.friend ]
			};
		case 'REMOVE_FRIEND':
			// console.log('in the switch/remove : ', action);
			return {
				friends: [ ...state.friends.filter((friend) => friend.id !== action.id) ]
			};
		default:
			return state;
	}
}
