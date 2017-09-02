export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			return Object.assign({}, state, state.friends.push(action.friend))
		case 'REMOVE_FRIEND':
			 return Object.assign({}, state, {
			 	friends: state.friends.filter(function(obj){
					return obj.id !== action.id
				})
			 })
		default:
			return state;
	}
}
