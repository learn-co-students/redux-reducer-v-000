export function manageFriends(state, action){
    const f = action['friend']
    switch(action.type) {

        case 'ADD_FRIEND':
            const newFriends =  Object.assign({"friends": state.friends})
            newFriends.friends.push(action['friend'])
            return newFriends 

        case 'REMOVE_FRIEND':

        const newFriendObj =  { 'friends': state.friends}
        console.log(newFriendObj)
        
         const f = newFriendObj.friends.filter((index) => index["id"]  !== action.id)

            return { 'friends': f}

        default: 
        return state;
    }

}
