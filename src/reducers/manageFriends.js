export function manageFriends(state, action){
    switch (action.type) {
        case ('ADD_FRIEND'):
            return {...state, friends: [...state.friends, {name: action.friend.name,  hometown: action.friend.hometown, id: action.friend.id}]}
        case ('REMOVE_FRIEND'):
            const indexToRemove =  state.friends.map(f => (f.id)).indexOf(action.id);
            const newFriends = [...state.friends]
            newFriends.splice(indexToRemove, 1)
            return {...state, friends: newFriends};
        default:
            return state;
    }
}
