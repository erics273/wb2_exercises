"use strict"

//create variable for the radius of our circle
let radius = 80;

//create variable to hold the calculated area of our circle
let area = Math.PI * (radius * radius);

//using Math.pow()
//const area = Math.PI * Math.pow(radius, 2);

//using the exponentiation operator (es7)
//const area = Math.PI * (radius ** 2);

//output the area of the circle to the console
console.log("The area of a circle with radius "+ radius +" is "+ area )