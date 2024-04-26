"use strict"

//create variables for the bill and the tip percentage
let billAmount = 50.78;
let tipPercentage = 15; 

//calculae the tip amount
let tipAmount = billAmount * (tipPercentage / 100);

//output info to the console using .toFixed(2) so the money looks right
console.log("The tip on a $"+ billAmount +" food bill is $" + tipAmount.toFixed(2));
