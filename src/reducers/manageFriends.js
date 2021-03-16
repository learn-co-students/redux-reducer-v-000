export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return { 
                ...state.friends, name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id
            }
        case 'REMOVE_FRIEND':
            return {state}
        default:
            return state;
    }
}
