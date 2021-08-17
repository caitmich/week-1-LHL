//take param from command line
const args = process.argv

for(let repeat = 0; repeat < args[2]; repeat++){
  for(let i = 2; i < args.length; i++){
    console.log(Math.floor((Math.random() * 6) + 1));
  }
}

