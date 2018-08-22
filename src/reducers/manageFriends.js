export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            // const newState = state;
            // newState.friends.push(action.friend);
            // return newState;
            return {...state,
                friends: [ ...state.friends,
                    action.friend
                ]
            }

        case 'REMOVE_FRIEND':
            const removeFriendIndex = state.friends.findIndex(friend => friend.id === action.id);
            return {...state,
                friends: [
                    ...state.friends.slice(0, removeFriendIndex),
                    ...state.friends.slice(removeFriendIndex + 1)
                ]
            }

        default:
            return state;
    }
}
