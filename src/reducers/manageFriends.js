export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return (
                {...state, friends: [
                    ...state.friends, action.friend
                ]}
            )
        case "REMOVE_FRIEND":
            
            const friendIndex = state.friends.findIndex(friend => friend.id === action.id)
                console.log(...state.friends.slice(0, friendIndex))
                console.log(...state.friends.slice(friendIndex + 1))
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0, friendIndex),
                        ...state.friends.slice(friendIndex + 1)
                        
                    ]
                }
            )
            default:
                return state;
    }
}
