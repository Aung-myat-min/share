function ipRangeSearching(ip, prefix) {
  let list = ip.split(".");
  let subnets = 2 ** (32 - prefix);
  let host = subnets - 2;
  let range = [0, subnets - 1];
  let number = 0;
  while (true) {
    if (parseInt(list[3]) > 255) {
      list[3] = "0";
      list[2] = (parseInt(list[2]) + 1).toString();
    }
    if (list[3] >= range[0] && list[3] <= range[1]) {
      break;
    }
    range[0] = range[1] + 1;
    range[1] += subnets;
    if (range[1] > 255) {
      range = [0, subnets - 1];
      list[2] = (parseInt(list[2]) + 1).toString();
      if (parseInt(list[2]) > 255) {
        list[2] = "0";
        list[1] = (parseInt(list[1]) + 1).toString();
        if (parseInt(list[1]) > 255) {
          list[1] = "0";
          list[0] = (parseInt(list[0]) + 1).toString();
          if (parseInt(list[0]) > 255) {
            console.log("IP address out of range");
            return null;
          }
        }
      }
    }
    if (number == 20) {
      break;
    }
    number++;
  }
  let string = list[0] + "." + list[1] + "." + list[2];
  console.log(`The subnet is ${subnets}, the host is ${host},`);
  console.log(`The network ip is ${string}.${range[0]}.`);
  console.log(`The broadcast ip is ${string}.${range[1]}.`);
  console.log(`The first ip is ${string}.${range[0] + 1}.`);
  console.log(`The last ip is ${string}.${range[1] - 1}.`);
  return string + "." + (range[1] + 1).toString();
}

module.exports = ipRangeSearching;
