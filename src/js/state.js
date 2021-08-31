// export const feed = changeState("soil")(1);
// export const blueFood = changeState("soil")(5);

// export const hydrate = changeState("water")(1);
// export const superWater = changeState("water")(5);


// export const storeState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction = state => state) =>{
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

// export const stateControl = storeState();

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value
//     });
//   };
// };


