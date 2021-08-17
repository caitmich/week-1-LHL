
   /* const args = process.argv;
    let newArg = '';
    for(let i = (args[2].length - 1); i >= 0; i --){
      newArg += args[2][i];
  
    } console.log(newArg);
    //const reverse = function(word){};
    */

    'use strict';

    const args = process.argv;

/*    for (let j = 0; j < args.length; j++) {
        console.log(j + ' -> ' + (args[j]));
    } 
*/

    
    let newArg = '';

    for (let i = 2; i < args.length; i++) {
      for(let j = (args[i].length - 1); j >= 0; j --){
        newArg += args[i][j];
      } console.log(newArg);
    }



    
      
      
  