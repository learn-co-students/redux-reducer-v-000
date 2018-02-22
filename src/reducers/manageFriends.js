export function manageFriends(state, action){
    const isActionId = (el) => {el.id === action.id}
    const actionFriendIdx = state.friends.findIndex((el) => el.id === action.id)
    const newFriends = state.friends.slice(0, actionFriendIdx).concat(state.friends.slice(actionFriendIdx + 1))
    switch (action.type) {
        case 'ADD_FRIEND':
            return Object.assign({}, state, {friends: state.friends.concat(action.friend)})
        case 'REMOVE_FRIEND':
            return Object.assign({}, state, {friends: newFriends})
        default:
            return state;
    }
}
