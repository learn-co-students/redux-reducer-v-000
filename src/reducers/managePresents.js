let state = {presents: []}

let action = {type: 'ADD_PRESENTS'}

export function managePresents(state, action){
  
  switch (action.type) {
    case 'ADD_PRESENTS':
      return {presents};
    default: 
    return state
  }
  

}

// function reducer(state, action){      
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     case 'DECREASE_COUNT':
//       return {count: state.count - 1}
//     default:
//       return state;
//   }
// } 

// action = {
  //   type: "INCREASE"
  // }
