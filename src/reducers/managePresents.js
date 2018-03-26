import React from 'react';

export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
