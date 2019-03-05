export function manageFriends(state, action){
	switch (action.type) {
		case "ADD_FRIEND":
			return ({...state, 
						friends: [
							...state.friends,
							action.friend
						]
			})
		case "REMOVE_FRIEND":
			// find the index to be removed
			const ind = state.friends.findIndex(friend => friend.id === action.id) // 101
			return({
				...state, 
				// Slice will create a new array. We create two arrays: from beggining to index and 
				// from index+1 to end. Then we apply the spread operator (...) to take the items
				// of those arrays and create a new single array containing all the items we need.
				friends: [
					...state.friends.slice(0, ind), // 100
              		...state.friends.slice(ind + 1)	// 100 102
				]
			})				 			
		default:
			return state
	}
}
