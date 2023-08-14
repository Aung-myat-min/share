const readline = require("readline");
const vaildIP = require("./vaildIP");
const mainFunc = require("./ipRangeSearching");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let theIP;

function requestIP() {
  rl.question("Which IP do you want to use: ", (IP) => {
    if (vaildIP(IP)) {
      theIP = IP;
      for (i in userInputs) {
        console.log(userInputs[i][0]);
        let tem = mainFunc(theIP, prefixs[i]);
        theIP = tem;
      }
      rl.close();
    } else {
      console.log("Invaild IP address or format!");
      requestIP();
    }
  });
}

let userInputs = {};
let prefixs = [];
let the_solution = {};

function getUserInput() {
  let temporary;
  rl.question("Enter the department and user numbers: ", (userInput) => {
    if (userInput.toLowerCase() === "done") {
      var items = Object.keys(userInputs).map(function (key) {
        return [key, userInputs[key]];
      });

      // Sort the array based on the second element
      items.sort(function (first, second) {
        return second[1] - first[1];
      });

      // Create a new array with only the first 5 items
      userInputs = items;
      console.log(userInputs);
      for (i of userInputs) {
        prefixs.push(determinePrefixlenghts(i[1]));
      }
      console.log(prefixs);
      requestIP();
    } else {
      temporary = userInput.split(",");
      temporary[0] = temporary[0].trim();
      temporary[1] = parseInt(temporary[1].trim());
      userInputs[temporary[0]] = temporary[1];
      getUserInput(); // Ask for input again
    }
  });
}

function determinePrefixlenghts(the_user_numbers) {
  let number = 2;
  while (true) {
    if (the_user_numbers <= 2 ** number - 2) {
      return 32 - number;
    } else {
      number++;
    }
  }
}

console.log("Enter the department and user numbers: name, number");
getUserInput();
