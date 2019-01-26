import { stat } from "fs";

export function manageFriends(state = {friends: []}, action){

    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]};
        case 'REMOVE_FRIEND':
            const newFriendsArr = [...state.friends].filter( (friend) => {
                return friend.id !== action.id
            } );
            return {...state, friends: newFriendsArr};
        default: return state;
    }
}
