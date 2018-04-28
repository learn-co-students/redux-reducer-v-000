export function manageFriends(state, action){
    switch (action.type) {
        
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, {'hometown': action.friend.hometown, 'id': action.friend.id, 'name': action.friend.name }]};
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex((element) => element.id === action.id)
            return {state.friends: state.friends.splice(index,1)}
        default: return state;
    }
    
}
