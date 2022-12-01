const convertToCelsius = function(fer) {
  let cel = 5/9 * (fer - 32);
  if (Number.isInteger(cel) === true) {
    return parseInt(cel);
  } else {
    return parseFloat(cel.toFixed(1)); 

  }
  
};

const convertToFahrenheit = function(cer) {
  let fel = 9/5 * (cer) + 32;
  if (Number.isInteger(fel) === true) {
    return parseInt(fel);
  } else {
    return parseFloat(fel.toFixed(1));

  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
