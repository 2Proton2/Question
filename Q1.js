const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findFacingSeat(n) {
  const rem = n % 12;

  //cases
  //this is last seat of a compartment
  // Case 1 to 6 will be first portion of a compartment
  // Case 7 to 12 will be second portion of a compartment

  switch (rem) {
    //this is last seat of a compartment
    case 0:
      return n - 11 + " WS";
    // Case 1 to 6 will be first portion of a compartment
    case 1:
      return n + 11 + " WS";
    case 2:
      return n + 9 + " MS";
    case 3:
      return n + 7 + " AS";
    case 4:
      return n + 5 + " AS";
    case 5:
      return n + 3 + " MS";
    case 6:
      return n + 1 + " WS";
    // Case 7 to 11 will be second portion of a compartment while 12th is the 0th case
    case 7:
      return n - 1 + " WS";
    case 8:
      return n - 3 + " MS";
    case 9:
      return n - 5 + " AS";
    case 10:
      return n - 7 + " AS";
    case 11:
      return n - 9 + " MS";
    default:
      return "Invalid seat number";
  }
}

//for making the prompt
rl.question('Enter the number of test cases: ', (t) => {
  t = parseInt(t);

  //starting the recursive function from 0 and will be iterated untill the asked test cases
  (function findSeatNum(i) {
    if (i < t) {
      rl.question('Enter the seat number: ', (n) => {
        n = parseInt(n);

        //find the seat number
        const result = findFacingSeat(n);
        console.log(result);

        //continue the iteration
        findSeatNum(i + 1);
      });
    } else {
      rl.close();
    }
  })(0);
});
