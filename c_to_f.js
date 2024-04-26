"use strict"

//setup variables for celcius and farenheight
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;

//output the results of the conversion to the console. 
//using .toFixed(2) ensure 2 numbers after the decimal
console.log(celsius + " degrees Celsius is " + fahrenheit.toFixed(2) + " degrees Fahrenheit.");