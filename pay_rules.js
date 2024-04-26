"use strict"

//create som variables we need for our calculations

//this is the hourly rate for the employee and the hours they worked
let payRate = 17.30;
let hoursWorked = 45;

//create some variables to hold the regular hours and overtime hours
let regularHours = 0;
let overtimeHours = 0;

//if the hours are greater than 40, we know they worked overtime
if(hoursWorked > 40){
    //this is where we need to figure out the overtime hours
    //we can assume the regular hours are 40 if they worked over 40 hours
    regularHours = 40;

    //subtract the actual hours worked from the regular pay hours to get the overtime hours
    overtimeHours = hoursWorked - regularHours;
}else{
    //code for folks who didn't work overtime
    regularHours = hoursWorked;
}

//create some variables to represent the normal pay and the overtime pay (1.5x)
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

//figure out what we got pay after normal and overtime hours (pay before taxes)
let grossPay = normalPay + overtimePay;

//display the results to the user in the console
console.log("I got paid $" + normalPay.toFixed(2) + " for my regular hours");
console.log("I got paid $" + overtimePay.toFixed(2) + " for my overtime hours");
console.log("I got paid $" + grossPay.toFixed(2) + " for my gross pay");