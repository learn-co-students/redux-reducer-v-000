export function manageFriends(state = {friends: []}, action){

    // let state = {friends: []}

    switch(action.type){
        case 'ADD_FRIEND': 
            return {...state, friends: [...state.friends, action.friend]}
            
        case 'REMOVE_FRIEND': 
        // const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        // return (
        //   {...state,
        //       friends: [
        //         ...state.friends.slice(0, removalIndex),
        //         ...state.friends.slice(removalIndex + 1)
        //       ]
        //   }
        // )
        return (Object.assign({}, state, {friends: state.friends.filter((friend) => friend.id !== action.id)}))
        default: 
            return state;

    }



}
