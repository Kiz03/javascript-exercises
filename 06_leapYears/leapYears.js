const leapYears = function(year) {

  if (year % 100 === 0) {
    if (year === 1600 || year === 2000) {
      return (true); 
    } else {
      return (false); 
    }
    
  } else if (year % 4 === 0) {
    return (true); 
  } else {
    return (false);
  }
   
  

};

// Do not edit below this line
module.exports = leapYears;
