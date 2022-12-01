const convertToCelsius = function(fer) {
  let cel = 5/9 * (fer - 32);
  return cel.toFixed(1); 
};

const convertToFahrenheit = function(cer) {
  let fel = 9/5 * (cer) + 32;
  return fel.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
