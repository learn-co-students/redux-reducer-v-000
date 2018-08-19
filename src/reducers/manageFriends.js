export function manageFriends(state, action){
	switch (action.type) {
		case "ADD_FRIEND":
		 let object = Object.assign({},state)
		 object.friends.push(action.friend)
		 return object
		case "REMOVE_FRIEND":
		 return {friends: state.friends.filter(friend => friend.id !== action.id)}
		default:
		 return state
	}
}
