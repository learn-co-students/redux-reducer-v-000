export function manageFriends(state, action){
    switch (action.type) {
        // using Object.assign, not avail in ES6
        // case 'ADD_FRIEND':
        //     return Object.assign({}, state, {
        //         friends: [
        //             ...state.friends,
        //             action.friend
        //         ]
        //     });

        // case 'REMOVE_FRIEND':
        // const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        // return Object.assign({}, state, {
        //     friends: [
        //         ...state.friends.slice(0, removalIndex),
        //         ...state.friends.slice(removalIndex + 1)
        //     ]
        // });  

        // using object spread operator
        case 'ADD_FRIEND':
            return {...state, friends: state.friends.concat(action.friend)}
        case 'REMOVE_FRIEND':
            return {...state, friends: state.friends.filter(friend => friend.id !== action.id)}

        default:
            return state;    
    }
}
