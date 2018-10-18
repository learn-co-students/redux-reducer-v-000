export function manageFriends(state, action){
	switch (action.type){
		case 'ADD_FRIEND':
			return {friends: [...state.friends, action.friend]};
		case 'REMOVE_FRIEND':
			const found = state.friends.indexOf(state.friends.find(i => i.id == action.id));
			const newary = [...state.friends];
			newary.splice(found, 1);
			// return {friends: newary.splice(found, 1)};
			return {friends: newary};
		default:
			return state;
	}
}
// [...state.friends, action.friend]
// Object.assign({}, state.friends, action.friend)

// export function manageFriends(state, action){
// 	switch (action.type){
// 		case 'ADD_FRIEND':
// 			return(Object.keys(action.friend).includes(:name, :hometown, :id) ? {friends: [...state.friends, action.friend]} : state);
// 		default:
// 			return state;
// 	}
// }