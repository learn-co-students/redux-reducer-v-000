export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
        let addState = {...state};
        addState.friends.push(action.friend);
            return addState;
        case 'REMOVE_FRIEND':
            let removeState = {...state};
            let friends = removeState.friends.filter(friend => friend.id !== action.id);
            removeState.friends = friends;
            return removeState;
        default:
            return state;
    }
}
