export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND': 
            const newFriendAdded = Object.assign(
                {}, 
                state, 
                {friends: state.friends.concat(action.friend)}
            );
            return newFriendAdded;
        case 'REMOVE_FRIEND':
            let friendIndex = null;
            state.friends.forEach((friend, index) => {
                if (friend.id === action.id) {
                    friendIndex = index;
                }
            });
            const friendRemoved = Object.assign(
                {},
                state,
                {friends: state.friends.slice(0,friendIndex).concat(
                    state.friends.slice(friendIndex + 1))}
            )
            return friendRemoved;
        default:
            return state;
    }
}

