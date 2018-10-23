export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
        let addState = {...state};
        addState.friends.push(action.friend);
            return addState;
        case 'REMOVE_FRIEND':
            let removeState = {...state};
            return {...state, friends: removeState.friends.filter(friend => friend.id !== action.id)};
        default:
            return state;
    }
}

// case "ADD_FRIEND":
// return (
//   {...state,
//       friends: [
//         ...state.friends,
//         action.friend
//       ]
//   }
// )

// case "REMOVE_FRIEND":
// const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
// return (
//   {...state,
//       friends: [
//         ...state.friends.slice(0, removalIndex),
//         ...state.friends.slice(removalIndex + 1)
//       ]
//   }
// )
