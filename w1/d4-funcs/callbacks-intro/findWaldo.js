
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

let names = ["Alice", "Bob", "Waldo", "Winston"];

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};


names.forEach((name, index) => {
  if(name === "Waldo"){
    actionWhenFound(index);
  } 
})