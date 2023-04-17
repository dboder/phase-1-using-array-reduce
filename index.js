const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
    return element + accumulator;
  }, 0); // the 0 represents the inital value for the accumulator if none, it grabs first element and starts at second

/* FOR DEBUGGING ARRAY:

    batteryBatches.forEach(function (e) {
    console.log("DEBUG: WHAT ARE YOU?!?" + e);
    });
*/