export function manageFriends(state, action) {
	let friends = state.friends.slice();
	switch(action.type) {
		case 'ADD_FRIEND':
		friends = [...friends, action.friend];
		return {...state, friends: friends};

		case 'REMOVE_FRIEND':
		let fr = state.friends;
      	const remove = state.friends.findIndex(f => f.id === action.id);
     
        friends.splice(remove,1);
        return {...state, friends: friends}

		default: 
			return state; 
	}

}
