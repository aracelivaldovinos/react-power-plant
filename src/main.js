/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import {stateControl, blueFood, changeState} from './js/state.js';
// import {blueFood} from './js/plant.js';
// import * as plant from './plant.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// We create four functions using our function factory. We could easily create many more.
// Plants Functionalities
const feed = changeState("soil")(1);
const superFeed = changeState("soil")(5);
// const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

const light = changeState("light")(1);
const superLight = changeState("light")(5);

// Creating a plant...maybe

const canColorful = (plant) => ({
  color: (color) => {
    return `The ${plant.name} color is ${color}.`;
  }
});

const canEat = (plant) => ({
  eat: (food) => {
    return `The ${plant.name} favorite food is ${food}.`;
  }
});

const canSleep = (plant) => ({
  eat: (food) => {
    return `The ${plant.name} is sleeping.`;
  }
});

const colorfulHungryPlant = (name) => {
  let plant = {
    name
  };

  return { ...plant, ...canColorful(plant), ...canEat(plant), ...canSleep(plant) };
};

const fern = colorfulHungryPlant("Christofern");



//Storing object as state
// plant2 = storeState();
// plant2(feed)(1)


$(document).ready(function() {
  $('#form')
  $('#plant').text(`${fern.name}`);
  const fernsColor = $('#color').val();



// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feedMore').click(function() {
    const newState = stateControl(superFeed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#waterMore').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = stateControl(light);
    $('#light-value').text(`Snapshot: ${newState.light}`);
  });

  $('#lightMore').click(function() {
    const newState = stateControl(superLight);
    $('#light-value').text(`Snapshot: ${newState.light}`);
  });



// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});