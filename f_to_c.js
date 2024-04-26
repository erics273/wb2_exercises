"use strict"

//setup variables for celcius and farenheight
let fahrenheit = 77;
let celsius = (fahrenheit - 32) * 5 / 9;

//output the results of the conversion to the console. 
//using .toFixed(2) ensure 2 numbers after the decimal
console.log(fahrenheit + " degrees Fahrenheit is " + celsius.toFixed(2) + " degrees Celsius.");