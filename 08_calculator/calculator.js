const add = function(a, b) {
    return a + b;
	
};


const subtract = function(a, b) {
    return a - b;
	
};


const sum = function(su) {
    let wrk = Array.from(su);
    total = 0;
    for (let i = 0; i<wrk.length; i++) {
        total += wrk[i];
    }
    return total;
    };



const multiply = function(su) {
    let wrk = Array.from(su);
    total = 1;
    for (let i = 0; i<wrk.length; i++) {
        total *= wrk[i];
    }
    return total;


};



const power = function(a, b) {
    return a ** b;
	
};



const factorial = function(fck) {
    total = 1;
    for (let i = 1; i<=fck; i++) {
        total *= i;
    }

    return total;
	
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
