"use strict"

//Create a variable to hold our salary and tax rate
let salary = 1856;
let taxRate = 23;

// Calculate the amount withheld for taxes
let withheldAmount = salary * (taxRate / 100);

// Output the withheld amount
console.log("Amount withheld for taxes: $" + withheldAmount.toFixed(2));