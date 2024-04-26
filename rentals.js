"use strict"

// Define variables for the can capacity, cost per day, and number of passengers
let vanCapacity = 15;
let vanCostPerDay = 250;
let numberOfPassengers = 38;

// Calculate the number of vans needed for the amount of passengers rounding to the nearwest whole van
let numberOfVans = Math.ceil(numberOfPassengers / vanCapacity);

// Calculate the total cost of renting the vans
let totalCost = numberOfVans * vanCostPerDay;

// Calculate the cost per person
let costPerPerson = totalCost / numberOfPassengers;

// Display the results in the console
console.log("Total cost to rent vans: $" + totalCost);
console.log("Cost per person: $" + costPerPerson.toFixed(2));
