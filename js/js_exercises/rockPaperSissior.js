let playGame = confirm("Shall we play Rock, Paper, Sissors game?");
if (playGame) {
  let player = prompt("What is your choice?: ");
  if (player) {
    player = player.toLowerCase();
    if (player === "rock" || player === "paper" || player === "sissors") {
      let computer = Math.floor(Math.random() * 3 + 1);
      let computerChoice =
        computer === 1 ? "rock" : computer === 2 ? "paper" : "sissors";
      let reslut =
        player === computerChoice
          ? `Person choose ${player} and Computer choose ${computerChoice}\n So, It is a tie game!`
          : player === "rock" && computerChoice === "paper"
          ? `Person choose ${player} and Computer choose ${computerChoice}\n So, Computer Wins!`
          : player === "paper" && computerChoice === "sissiors"
          ? `Person choose ${player} and Computer choose ${computerChoice}\n So, Computer Wins!`
          : player === "rock" && computerChoice === "paper"
          ? `Person choose ${player} and Computer choose ${computerChoice}\n So, Computer Wins!`
          : `Person choose ${player} and Computer choose ${computerChoice}\n So, Person Wins!`;
      alert(reslut);
      let playAgain = confirm("Want to play again?");
      playAgain ? location.reload() : alert("It was a really good game, BYE!");
    } else {
      alert("Invalid input!");
    }
  } else {
    alert("I think you didn't enter anything. The game has stopped.");
  }
} else {
  alert("OK! see you.");
}
