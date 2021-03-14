export function manageFriends(state = {friends: []}, action){
                switch (action.type){
                    case 'ADD_FRIEND':
                    return {...state, friends: [...state.friends,action.friend] }
                    // call the copy of the whole state with spread oper
                    // then opent the friends object and copy with inside the alredy made friends. 
                    // the use the action the was passed in to add the action.friend. 
                    case 'REMOVE_FRIEND':
                    return {...state, friends: state.friends.filter(friend => friend.id !== action.id) }
                        // run filter on the whole array which is  = state.friends
                        //  then find out each friend and see if the friend.id matches the action type. In this case action.id
                     default:
                        return state;

                }
             }







