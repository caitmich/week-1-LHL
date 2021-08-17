for (let x = 100; x < 201; x++) {
  let output = "";

  if(x % 3 === 0) {
    output += "Loopy";
  } 
  
  if (x % 4 === 0) {
    output += "Lighthouse";
  } 
  
    console.log(output === "" ? x : output);

};