export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: state.friends.concat({ 
                name: 'Joe',
                hometown: 'Boston',
                id: 101
              })} 
        case 'REMOVE_FRIEND':
            return {friends: state.friends.filter(friend => friend.id !== 101)}
        default:
            return state;
        }
}
