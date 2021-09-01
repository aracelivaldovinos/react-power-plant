/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as plant from './js/plant.js';
import * as state from './js/state.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';


$(document).ready(function() {

  
  $('#feed').click(function() {
    const newState = state.stateControl(plant.superFeed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
});