export function manageFriends(state, action){
    console.log(action)
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                friends: [...state.friends, action.friend]
            }
        case 'REMOVE_FRIEND':
            const unFriend = state.friends.findIndex(friend => friend.id === action.id);
            return ( 
                {...state,
                friends:[ ...state.friends.slice(0, unFriend),
                ...state.friends.slice(unFriend+1)
                ]}
                // state.friends.map(friend => {
                //     if(friend.id !== action.id){
                //         return friend
                //     } 
                // })
            )
        default: 
            return state; 
    }
}
