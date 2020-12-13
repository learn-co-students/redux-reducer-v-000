export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [...state.friends, {
                        name: action.friend.name,
                        hometown: action.friend.hometown,
                        id: action.friend.id 
                    }]
                })
        case "REMOVE_FRIEND":
            let newFriends = state.friends.filter(friend => friend.id !== action.id)
            return (
                {...state,
                friends: newFriends
            })
        default:
            return state
    }
}
