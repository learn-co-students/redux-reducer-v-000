export function manageFriends(state, action){
		switch (action.type) {
    		case 'ADD_FRIEND':
      			return {friends: Object.assign([], [...state.friends, action.friend])}
      		case 'REMOVE_FRIEND':
      			return {friends: Object.assign([], state.friends.filter(friend => friend.id != action.id))}
			default:
				return state;      			
  		}
	}

