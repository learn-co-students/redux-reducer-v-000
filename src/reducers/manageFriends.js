export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return ({...state, friends: [...state.friends, action.friend]})
        case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
            return ({...state, friends: [
                            ...state.friends.slice(0, removalIndex),
                            ...state.friends.slice(removalIndex + 1)
                            ]})
        default:
          return state;
      }
}

//slice returns the selected objects
// we build a new friends array that looks like [everything before itemToBeRemoved + everything after]

//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
//hence [start at zero, end at (but don't include) itemTOBeREmoved]