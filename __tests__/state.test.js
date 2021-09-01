import * as plant from './../src/js/plant.js';
import * as state from './../src/js/state.js';

describe('storeState', () =>{
  test('should correctly store the state', () =>{
    const fedPlant = state.stateControl(plant.superFeed);
    expect(fedPlant).toEqual({ soil: 5 });
  });
});

describe('stateControl', () =>{
  test('should correctly test function factory', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const feed = state.changeState("soil");
    expect(feed(5)(plant)).toEqual({soil: 5, light: 0, water: 0});
  });
});