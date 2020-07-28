function duplicateArgs(){
var b = []
for (let i = 0; i < duplicateArgs.arguments.length; i++){
  b.push(duplicateArgs.arguments[i])
}
for (let i = 0; i < b.length; i++) {
  for (let j = i+1; j < b.length; j++) {
    if(b[i] === b[j]){
      return true;
    }
  }
}
return false;
}

console.log(duplicateArgs('abc', 'sso', 'js', 'true', 'else', 'js'));
