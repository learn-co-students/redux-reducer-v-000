export function manageFriends(state, action){
  switch (action.type) {
      case 'ADD_FRIEND':
        return { friends: [ { hometown: 'NYC', id: 100, name: 'Avi' }, { hometown: 'Boston', id: 101, name: 'Joe' } ] }
      case 'REMOVE_FRIEND':
        return { friends: [ { hometown: 'NYC', id: 100, name: 'Avi' }, { hometown: 'Philadephia', id: 102, name: 'Steven' } ] }
      default:
        return state;
    }
}
