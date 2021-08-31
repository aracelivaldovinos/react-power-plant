import {storeState, feed, hydrate, superWater, superFeed, light, superLight} from './../src/main.js';
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

// // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     });
//   };
// };

// // describe('changeState', () =>{
// //   test('should test changeState function', () => {
// //     const feed = changeState("soil")(1);
// //     expect(feed).toEqual('');
// //   });
// // });
// // Plants Functionalities
// const feed = changeState("soil")(1);
// const superFeed = changeState("soil")(5);
// // // const blueFood = changeState("soil")(5);
// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);
// const light = changeState("light")(1);
// const superLight = changeState("light")(5);

// const stateControl = storeState();
describe('storeState', () => {
  test('should store input variables', () => {
    const plant2 = storeState();
    expect(JSON.stringify(plant2)).toEqual(JSON.stringify(storeState()));
    expect(plant2(feed)).toEqual({"soil": 1});
    expect(plant2(superFeed)).toEqual({"soil": 6});
    expect(plant2(light)).toEqual({"soil": 6, "light": 1});
    expect(plant2(hydrate)).toEqual({"soil": 6, "water": 1, "light": 1});
    expect(plant2(superLight)).toEqual({"soil": 6, "water": 1, "light": 6});
    expect(plant2(superWater)).toEqual({"soil": 6, "water": 6, "light": 6});
  });
});