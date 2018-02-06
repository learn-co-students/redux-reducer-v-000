export function manageFriends(state, action){
	let friends = state.friends;
	switch (action.type) {
    	case 'ADD_FRIEND':
    		if(action.friend["name"]) friends.push(action.friend);
      		return {friends: friends } 
	    case 'REMOVE_FRIEND':
	    	let newFriends = friends.filter(function (el) {
 				return el.id !== action.id
			});
	      	return {friends: newFriends}
	    default:
	      	return state;
    }
}
