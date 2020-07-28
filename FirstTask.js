var arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
var sortingarr = [];
for(let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr[i].length; j++){
    sortingarr.push(arr[i][j]);
  }
}

function compareNumbers(a, b) {
  return a - b;
}

console.log(sortingarr.sort(compareNumbers).reverse());
