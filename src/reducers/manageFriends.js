export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            var nu_friends = []
            state.friends.map( pers => {
                console.log(pers)
                if(pers.id != action.id) {
                    nu_friends.push(pers)
                }
            })
            return {...state, friends: nu_friends}
    }
    return state
}
