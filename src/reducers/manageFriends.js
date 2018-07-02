export function manageFriends(state, action){
    let newState;
    switch (action.type) {
        case 'ADD_FRIEND':

            newState = {...state};
            newState.friends.push(action.friend);
            return newState;
            
        case 'REMOVE_FRIEND':

            newState = {...state};
            const friendIdToRemove = action.id;
            const newFriends = newState.friends.filter(friendObj => {
                return friendObj.id !== friendIdToRemove;
            })
            return {...newState, friends: newFriends}

        default:
            return state;
    }
}
