const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount!");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberlines = parseFloat(lines);

    if (isNaN(numberlines) || numberlines <= 0 || numberlines > 3) {
      console.log("Invalid deposit amount!");
    } else {
      return numberlines;
    }
  }
};

const getBet = (balance, numberOfLines) => {
  while (true) {
    const bet = prompt("Enter the bet per line:  ");
    const numberBet = parseFloat(bet);

    if (
      isNaN(numberBet) ||
      numberBet <= 0 ||
      numberBet > balance / numberOfLines
    ) {
      console.log("Invalid bet amount!");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i <= count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];

      reels[i].push(selectedSymbol);
      reelSymbols.slice(randomIndex, 1);
    }
  }
  return reels;
};

const trasnpose = (reel) => {
  const row = [];

  for (let i = 0; i < ROWS; i++) {
    row.push([]);
    for (let j = 0; j < COLS; j++) {
      row[i].push(reel[j][i]);
    }
  }
  return row;
};
const printRows = (rows) => {
  console.log("|*****$$*****|");
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      if (i == 0) {
        rowString += "   ";
      }
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
  console.log("|************|");
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      console.log(symbols);
      winnings += bet * SYMBOLS_VALUE[symbols[0]] * lines;
    }
  }
  return winnings;
};

const game = () => {
  let balance = deposit();
  let times = 0;
  while (true) {
    console.log(`You have a balance of ${balance}`);
    const lines = getNumberOfLines();
    const betting = getBet(balance, lines);
    balance -= betting * lines;
    const reels = trasnpose(spin());
    printRows(reels);
    const winnings = getWinnings(reels, betting, lines);
    balance += winnings;
    console.log(`You won $${winnings}`);

    if (balance <= 0) {
      console.log("Run out of Bet");
      break;
    }
    if (times % 3 === 0) {
      const playAgain = prompt("Play again? (y/n): ");
      if (playAgain != "y") {
        console.log(`You got ${balance}. Exiting Game....`);
        break;
      }
    }
    times++;
  }
};

game();
