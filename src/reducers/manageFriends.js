export function manageFriends(state = {friends:[]}, action){
    switch(action.type){
        case "ADD_FRIEND":
             return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let friendsCopy = [...state.friends];
            const toDelete = friendsCopy.find((friend)=>friend.id===action.id);
            const idxToDelete = friendsCopy.indexOf(toDelete);
            friendsCopy.splice(idxToDelete,1);

            return {friends: friendsCopy}
        default:
            return state;

    }
}
