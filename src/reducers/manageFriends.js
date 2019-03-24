export function manageFriends(state, action){
	switch (action.type) {
		case 'ADD_FRIEND':
			 return { ...state, friends: [...state.friends, action.friend]}
		case 'REMOVE_FRIEND':
			// let newArray = state.friends.slice()
			// let elementPos = newArray.map(function(x) {return x.id; }).indexOf(action.id);
  	// 		newArray.splice(elementPos, 1)
  	// 		return {...state, friends: newArray}
		  	const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
		      return (
		        {...state,
		            friends: [
		              ...state.friends.slice(0, removalIndex),
		              ...state.friends.slice(removalIndex + 1)
		            ]
		        }
		      )
		default:
			return state
	}
}
