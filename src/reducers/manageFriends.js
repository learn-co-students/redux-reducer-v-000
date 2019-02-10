export function manageFriends(state, action){
    console.log("state=", state,);
    console.log("action=", action);
    console.log('+++++++++++++++++++++++++++=');
    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND':
            const newFriends = [...state.friends].filter((friend) => friend.id !== action.id);
            return {friends: newFriends }
        default:
          return state;
}
}
