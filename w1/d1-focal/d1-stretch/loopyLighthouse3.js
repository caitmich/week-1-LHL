
let nums = [];

function loopyLighthouse(nums) {
for (let x = 100; x <= 200; x++){
  for (const x of nums) {
    let output = "";
    
    if (x % 3 === 0) {
      output += "Loopy";
    } 
    if (x % 4 === 0) {
      output += "Lighthouse";
    } 
    }
    console.log(output === "" ? num : output);
  }
};

console.log(loopyLighthouse(100-200));