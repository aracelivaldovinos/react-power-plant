/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as plant from './js/plant.js';
import * as state from './js/state.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const cactus = plant.cactus("Henry the cactus");
const pitcherPlant = plant.pitcherPlant("Callie");
const cactusStateControl = state.storeState();
const pitcherStateControl = state.storeState();


$(document).ready(function() {
  $('#cactus-name').text(cactus.name);
  $('#pitcher-name').text(pitcherPlant.name);
  
  // Cactus jQuery
  $('#feed').click(function() {
    const cactusState = cactusStateControl(plant.feed);
    $('#cactus-soil').text(`Soil: ${cactusState.soil}`);
  });
  $('#hydrate').click(function() {
    const cactusState = cactusStateControl(plant.hydrate);
    $('#cactus-water').text(`Water: ${cactusState.water}`);
  });
  $('#superLight').click(function() {
    const cactusState = cactusStateControl(plant.superLight);
    $('#cactus-light').text(`Light: ${cactusState.light}`);
  });

  // Pitcher plant
  $('#superFeed').click(function() {
    const pitcherState = pitcherStateControl(plant.superFeed);
    $('#pitcher-soil').text(`Soil: ${pitcherState.soil}`);
  });
  $('#superHydrate').click(function() {
    const pitcherState = pitcherStateControl(plant.superWater);
    $('#pitcher-water').text(`Water: ${pitcherState.water}`);
  });
  $('#light').click(function() {
    const pitcherState = pitcherStateControl (plant.light);
    $('#pitcher-light').text(`Light: ${pitcherState.light}`);
  });
});