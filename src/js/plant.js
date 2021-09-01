import * as state from './state.js';

// We create four functions using our function factory. We could easily create many more.
export const feed = state.changeState("soil")(1);
export const superFeed = state.changeState("soil")(5);

export const hydrate = state.changeState("water")(1);
export const superWater = state.changeState("water")(5);

export const light = state.changeState("light")(1);
export const superLight = state.changeState("light")(5);


export const canColorful = (plant) => ({
  color: (color) => {
    return `${plant.name} is ${color}.`;
  }
});

export const canPoke = (plant) => ({
  poke: () => {
    return `Watch out ${plant.name} pokes!`;
  }
});

export const canEat = (plant) => ({
  eat: (food) => {
    return `${plant.name} favorite food is ${food}.`;
  }
});

export const canSleep = (plant) => ({
  sleep: () => {
    return `${plant.name} sleeps.`;
  }
});

export const cactus = (name) => {
  let plant = {
    name
  };

  return { ...plant, ...canPoke(plant), ...canSleep(plant) };
};

export const pitcherPlant = (name) => {
  let plant = {
    name
  };

  return { ...plant, ...canColorful(plant), ...canEat(plant) };
};