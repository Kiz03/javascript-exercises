const sumAll = function(frs, end) {
  let sum = 0;
  let i = frs;
  let c = end;
  if (i>c) {
    i = end;
    c = frs;
  } if ( i<0 || c<0 ) {
    return 'ERROR';
    return;
  } if (Number.isInteger(i) !== true || Number.isInteger(c) !== true ) {
    return 'ERROR';
    return;
  }
  while (i<= c) {
    sum+=i;
    i++
  }
  return sum;


};



// Do not edit below this line
module.exports = sumAll;
