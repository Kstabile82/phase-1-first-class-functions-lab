// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
        return arr.slice(0, 2); 
}

const returnLastTwoDrivers = function (arr1) {
        return arr1.slice (arr1.length-2, arr1.length);
}
const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int; 
    }; 
}

const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}