import * as plant from './../src/js/plant.js';
import * as state from './../src/js/state.js';

describe('feed function', () =>{
  test('should correctly test feed function', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const feed = state.changeState("soil")(1);
    expect(feed(plant)).toEqual({soil: 1, light: 0, water: 0});
  });
});

describe('superFeed function', () =>{
  test('should correctly test feed function', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const superFeed = state.changeState("soil")(5);
    expect(superFeed(plant)).toEqual({soil: 5, light: 0, water: 0});
  });
});

describe('hydrate function', () =>{
  test('should correctly test water function', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const hydrate = state.changeState("water")(1);
    expect(hydrate(plant)).toEqual({soil: 0, light: 0, water: 1});
  });
});

describe('superWater function', () =>{
  test('should correctly test water function', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const superWater = state.changeState("water")(5);
    expect(superWater(plant)).toEqual({soil: 0, light: 0, water: 5});
  });
});

describe('light function', () =>{
  test('should correctly test light function', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const light = state.changeState("light")(1);
    expect(light(plant)).toEqual({soil: 0, light: 1, water: 0});
  });
});

describe('superLight function', () =>{
  test('should correctly test light function', () =>{
    let plant = { soil: 0, light: 0, water: 0 };
    const superLight = state.changeState("light")(5);
    expect(superLight(plant)).toEqual({soil: 0, light: 5, water: 0});
  });
});

describe('canColorful function', () =>{
  test('should correctly test colorful function', () =>{
    const rose = plant.canColorful("rose");
    expect(rose.color("red")).toEqual('undefined is red.');
  });
});

describe('cactus function', () =>{
  test('should correctly test cactus function', () =>{
    const cactus = plant.cactus("Needles The Cactus");
    expect(cactus.poke()).toEqual(`Watch out Needles The Cactus pokes!`);
    expect(cactus.sleep()).toEqual(`Needles The Cactus sleeps.`);
  });
});

describe('pitcherPlant function', () =>{
  test('should correctly test pitcherPlant function', () =>{
    const pitcherPlant = plant.pitcherPlant("Pitfall");
    expect(pitcherPlant.color("purple")).toEqual(`Pitfall is purple.`);
    expect(pitcherPlant.eat("flies")).toEqual(`Pitfall favorite food is flies.`);
  });
});
