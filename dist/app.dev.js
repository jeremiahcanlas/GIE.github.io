"use strict";

/* autonomous greeting depending on the user browser hours */
var today = new Date();
var hourNow = today.getHours();
var greeting; //if hours are greater than specified value var greeting will change

if (hourNow >= 18) {
  greeting = 'Good evening,';
} else if (hourNow >= 12) {
  greeting = 'Good afternoon,';
} else if (hourNow >= 0) {
  greeting = 'Good morning,';
} else {
  greeting = '';
} //output to dom 


document.querySelector('.greeting').innerHTML = greeting;