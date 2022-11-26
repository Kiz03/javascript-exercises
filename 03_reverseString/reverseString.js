const reverseString = function(str) {
    let e = ([...str]);
    let s = e.reverse();
    let g = s.join('');                    
    let f = g.toString()
    return(f);
};

// Do not edit below this line
module.exports = reverseString;
