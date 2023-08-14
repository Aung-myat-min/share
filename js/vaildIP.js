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

module.exports = isValidIP;
