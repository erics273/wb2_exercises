"use stict"

//create variables to represent my savings account balance and my interest rate
let savings = 200000
let interestRate = 8.75;

//aplly rule of 72 formula to get num years it will take my savings to double
let yearsToDouble = 72 / interestRate;

//output info to the console
console.log("At a " + interestRate + " interest rate, your savings account will be worth "+ savings * 2 +" in " + yearsToDouble + " years");