const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ugochukwu: ", (name) => {
  console.log(name);
  rl.close();
});

we are here 