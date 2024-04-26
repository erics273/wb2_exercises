"use strict"
//define variables for room area, tiles per box, and percentage of extra materials
let roomArea = 100;
let tilesPerBox = 12;
let extraPercentage = 10;


// Calculate total area including extra materials
let totalArea = roomArea * (1 + extraPercentage);

// Calculate the total number of tiles needed rounding to the nearest whole box
let totalTiles = Math.ceil(totalArea);

// Calculate the number of boxes needed rounding the nearest whole box
let boxesNeeded = Math.ceil(totalTiles / tilesPerBox);

// Output the number of boxes needed including extra material
console.log("Number of boxes needed:", boxesNeeded);