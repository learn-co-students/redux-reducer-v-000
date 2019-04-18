export function manageFriends(state, action){
    let friends = {...state}
    switch (action.type) {
        case 'ADD_FRIEND':
            return (
                {...state,
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
        case 'REMOVE_FRIEND':
            const removeAt = state.friends.findIndex(friend=> friend.id === action.id)
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0, removeAt),
                        ...state.friends.slice(removeAt + 1)
                    ]
                }
            )
        default:
            return state
    }
}
