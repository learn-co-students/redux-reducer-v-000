export function manageFriends(state, action){
    let friends = state.friends.slice();
    let friend = Object.assign({},action.friend);
    switch (action.type) {
        case "ADD_FRIEND": 
            friends = [...friends, friend];
            return {...state, friends: friends};
        case "REMOVE_FRIEND":
            let indexToRemove = friends.findIndex(function(f){
                return f.id === action.id;
            })
            friends.splice(indexToRemove,1);
            return {...state, friends: friends}
        default:
            return state;
    }
}
