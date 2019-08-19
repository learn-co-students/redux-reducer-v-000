export function manageFriends(state, action){
    let newState = Object.assign({}, state);
    switch (action.type) {
    case 'ADD_FRIEND':
        newState.friends.push({
            name: action.friend.name,
            hometown: action.friend.hometown,
            id: action.friend.id
        })
        return newState
    case 'REMOVE_FRIEND':
        newState.friends = newState.friends.filter((friend)=> friend.id !== action.id )
        return newState
    default:
        return state;
    }
}
