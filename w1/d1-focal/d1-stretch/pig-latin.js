const args = process.argv;
let restOfWord = '';

for (let i = 2; i < args.length; i++) {
    let firstLetter = args[i][0];
    let ending = firstLetter + 'ay';
  for(let j = 1; j < args[i].length; j++)
    restOfWord += args[i][j];

console.log(restOfWord + ending);
}; 


  /* for(let j = 0; j < args.length; j ++){
    newArg += args[i][j];
  } console.log(newArg); */
