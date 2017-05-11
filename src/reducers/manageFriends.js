export function manageFriends(state = {
    friends: [],
}, action) {
    switch (action.type) {

        case 'ADD_FRIEND':
        return Object.assign({}, state, {
            friends: [...state.friends, action.friend]
        });

        case 'REMOVE_FRIEND':
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
        return Object.assign({}, state, {
            friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
            ]
        })
    default: return state;
    }
}




// import { managePresents } from '../src/reducers/managePresents';
// import { manageFriends } from '../src/reducers/manageFriends';
// import sinon from 'sinon';

// describe('managePresents', () => {

//   let state = { numberOfPresents: 0 };

//   it("returns the existing state if the action's type doesn't match a type in the reducer", () => {
//     expect(managePresents(state, { type: 'Random Action Type' })).toEqual(state);
//   });

//   it("increases the number of presents if there the action's type is 'INCREASE'", () =>{
//     expect(managePresents(state, { type: "INCREASE" })).toEqual({ numberOfPresents: 1 });
//   });

//   it("adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object", () =>{
//     managePresents(state, { type: "INCREASE" });
//     expect(state).toEqual({ numberOfPresents: 0 });
//   })
// })
