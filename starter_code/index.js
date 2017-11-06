'use strict';

var Elevator = require('./elevator');
var Person = require('./person');

var elevator = new Elevator();
var person = new Person('Clara', 5, 2);

console.log(person.name);
elevator._start();
elevator.floorUp();
// elevator.floorDown();
// setTimeout(elevator.stop(), 5000);
