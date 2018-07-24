export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
    return Object.assign({}, state, {
                friends : state.friends.concat({
                    hometown: 'Boston',
                    id: 101,
                    name: 'Joe'
                })
              })
    case 'REMOVE_FRIEND':
    const friends = state.friends.filter(friend => friend.id !== action.id);
    return { friends }
    default: return state;
  }
}
