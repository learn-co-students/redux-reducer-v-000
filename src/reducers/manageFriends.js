export function manageFriends(state, action){
	switch(action.type) {
		case 'ADD_FRIEND' :
			return {friends: [...state.friends, action.friend]}
		case 'REMOVE_FRIEND' :
			let friendz = state.friends

			function arrayRemove(arr, value) {

			   return arr.filter(function(ele){
			       return ele.id != value.id;
			   });
			}

			let newFriendz = arrayRemove(friendz, action)

			return {friends: newFriendz}
		default:
			return state;
	}
}
