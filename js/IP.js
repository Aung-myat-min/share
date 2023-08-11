const readline = require("readline");

const subnet = (number) => {
  return 2 ** (32 - number);
};

const Host = (number) => {
  return number - 2;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValidIP(str) {
  let vaild = true;
  let list = str.split(".");
  if (list.length != 4) {
    vaild = false;
  }
  for (i in list) {
    if (
      /[abcdefghijklmnopqrstuvwxyz\n\t ]/.test(list[i]) ||
      parseInt(list[i]) == NaN ||
      (list[i].length > 1) & list[i].startsWith("0")
    ) {
      vaild = false;
    }
  }
  for (i in list) {
    if (!((parseInt(list[i]) > -1) & (parseInt(list[i]) < 256))) {
      vaild = false;
    }
  }
  return vaild;
}

rl.question("Please IP address: ", (userInput) => {
  let ip = userInput.split("/")[0];
  let prefix = parseInt(userInput.split("/")[1]);
  if (!isValidIP(ip) || prefix > 32) {
    console.log("Invalid IP or Prefix Length.");
  } else {
    let list = ip.split(".");
    let subnets = subnet(prefix);
    let host = Host(subnets);
    let range = [0, subnets - 1];
    while (true) {
      if (list[3] >= range[0] && list[3] <= range[1]) {
        break;
      }
      range[0] = range[1] + 1;
      range[1] += subnets;
    }
    let string = list[0] + "." + list[1] + "." + list[2];
    console.log(`The subnet is ${subnets}, the host is ${host},`);
    console.log(`The network ip is ${string}.${range[0]}.`);
    console.log(`The broadcast ip is ${string}.${range[1]}.`);
    console.log(`The first ip is ${string}.${range[0] + 1}.`);
    console.log(`The last ip is ${string}.${range[1] - 1}.`);
  }
  rl.close();
});
