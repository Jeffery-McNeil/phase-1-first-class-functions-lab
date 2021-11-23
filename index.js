const returnFirstTwoDrivers = function ([a, b, c, d]) {
    let array = [a, b, c, d]
    let array2 = array.slice(0,2)
    return array2
}

const returnLastTwoDrivers = function ([a, b, c, d]) {
    let array = [a, b, c, d]
    let array2 = array.slice(2,4)
    return array2
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (x) {
    const multiply = x => x**2;
    return multiply; 
}

function fareDoubler(x) {
    const multiply = x;
    return multiply*2
}

function fareTripler(x) {
    const multiply = x;
    return multiply*3
}

function selectDifferentDrivers([a, b, c, d], functionChoice)
{   
   switch (functionChoice) {
       case returnFirstTwoDrivers: 
           return returnFirstTwoDrivers([a, b, c, d]);
       case returnLastTwoDrivers:
           return returnLastTwoDrivers([a, b, c, d]);

   };
}