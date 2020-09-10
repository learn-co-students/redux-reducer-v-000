export function manageFriends(state, action){
    // the initial state should be an object with a key, friends, set to an empty array.
    // handle two actions, "ADD_FRIEND" and "REMOVE_FRIEND". 
    switch (action.type) {
        // When adding a friend, the action will include a friend key assigned to an object with name, hometown, and id keys.
        case 'ADD_FRIEND':
            // return a new state with this friend object added to the friends array.
            //return {friends: state.friends.concat(action.friend)}
            return (
                {...state,
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
        case 'REMOVE_FRIEND':
            const index = state.friends.findIndex(friend => friend.id === action.id)
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0, index),
                        ...state.friends.slice(index + 1)
                    ]}
            )
        default:
            return state
    }
}
