const raisinAlarmArray = function(cookies) {
  var result = [];
  for(let i= 0; i < cookies.length; i++){
    for(let j= 0; j < cookies[i].length; j++){
      if (cookies[i][j] === "🍇") {
        result.push( "Raisin alert!");
        i++
      }
    }
    result.push("All good!");
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
