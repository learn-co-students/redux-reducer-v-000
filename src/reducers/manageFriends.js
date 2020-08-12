export function manageFriends(state = {friends: []}, action){

    // let state = {friends: []}

    switch(action.type){
        case 'ADD_FRIEND': 
            return {...state, friends: [...state.friends, action.friend]}
            
        case 'REMOVE_FRIEND': 
            return (Object.assign({}, state, {friends: state.friends.filter((friend) => friend.id !== action.id)}))
        default: 
            return state;

    }



}
