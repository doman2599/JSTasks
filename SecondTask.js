function duplicateArgs(){
  test = [].slice.call(duplicateArgs.arguments)   
    test = test.filter(function (elem, pos, arr) {
     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
  });
  if (test == ''){
    return false  
  }
  else{
    return true
  }
}
console.log(duplicateArgs(35, 14, 40, 14));
