const removeFromArray = function(array, rem) {
  let e = array.toString();
  let b = rem.toString();
  let v = e.replaceAll(b, '');
  let c = v.replaceAll(',', '')
  let o = ([...c]);


  return o;


};
// Do not edit below this line
module.exports = removeFromArray;
