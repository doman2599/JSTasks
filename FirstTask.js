var arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
var sortingarr = [];

var flattened = arr.reduce(function(a, b) {
  return a.concat(b);
});  

console.log(flattened.sort(compareNumbers).reverse())

function compareNumbers(a, b) {
  return a - b;
}
