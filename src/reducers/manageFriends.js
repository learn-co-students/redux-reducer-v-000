export function manageFriends(state = {
  friends: [],
}, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {
              friends:
              [...state.friends,
              action.friend]
            }
    case 'REMOVE_FRIEND':
      return {
        friends:
        state.friends.filter( (friend) => friend.id !== action.id )
      }
    default:
    return state;
  }
}
// Error: Expected
// { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 },
// { name: 'Joe', hometown: 'Boston', id: 101 },
// { name: 'Steven', hometown: 'Philadephia', id: 102 } ] } }
//
// to equal
// { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 },
// { name: 'Steven', hometown: 'Philadephia', id: 102 }
// // ] }
