const sumAll = function(frs, end) {
  
  let sum = 0;
  let i = frs;
  while (i<= end) {
    sum+=i;
    i++
  }
  return sum;


};

// Do not edit below this line
module.exports = sumAll;
