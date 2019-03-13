export function manageFriends(state, action){
    console.log(action)
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                friends: [...state.friends, action.friend]
            }
        case 'REMOVE_FRIEND':
            // MDN: "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test."
            const unFriend = state.friends.findIndex(friend => friend.id === action.id);
            return ( 
                {...state,
                // MDN: "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified." That's why we're slicing everything before our offending friend object and after it, then combining those two using the spread operator. I get why this works.
                friends:[ ...state.friends.slice(0, unFriend),
                ...state.friends.slice(unFriend+1)
                ]}

                // Below is the strategy I was trying before getting help. I thought I could map over friends and return a new array that contained all of the members of friends, except for that one offending member. I don't understand why this doesn't work. Map returns an undefined member in place of the offending friend. But why? Why doesn't it return nothign at all?

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
