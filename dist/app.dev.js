"use strict";

/* autonomous greeting depending on the user browser hours */
var today = new Date();
var hourNow = today.getHours();
var greeting;
var greeting2; //if hours are greater than specified value var greeting will change

if (hourNow >= 18) {
  greeting = 'Good evening,';
  greeting2 = 'tonight!';
} else if (hourNow >= 12) {
  greeting = 'Good afternoon,';
  greeting2 = 'today!';
} else if (hourNow >= 0) {
  greeting = 'Good morning,';
  greeting2 = 'today!';
} else {
  greeting = '';
  greeting2 = 'today!';
} //output to dom 


document.querySelector('.greeting').innerHTML = greeting;
document.querySelector('.greeting2').innerHTML = greeting2;