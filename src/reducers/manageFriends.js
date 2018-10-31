
let initialState = {
    friends: []
}

let action = {
    type: "ADD_FRIEND",
    type: "REMOVE_FRIEND",
    friend: "Chrome Boi"
}

export function manageFriends(state=initialState, action){
    switch (action.type) {
        case "ADD_FRIEND" :
            return (
                {...state, 
                
                friends: [...state.friends, action.friend]})
        case "REMOVE_FRIEND" :
            let removalIndex = state.friends.findIndex((friend) => friend.id === action.id);

            return (
                {...state,
                
                friends: [
                    ...state.friends.slice(0, removalIndex), 
                    ...state.friends.slice(removalIndex + 1)
                ]
                }
            )
        default :
            return state;
    }
}
