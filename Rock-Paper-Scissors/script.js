const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "β",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "β",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "β",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (yourWinner) document.getElementById("result").innerText = "YOu WoN!!!π₯³";
  document.getElementById("result").style.color = "#00ff44";
  if (computerWinner) incrementScore(computerScoreSpan);
  if (computerWinner)
    document.getElementById("result").innerText = "YoU LooSe.π’";
  if (computerWinner) document.getElementById("result").style.color = "red";
  if (!computerWinner && !yourWinner)
    document.getElementById("result").innerText = "....πTiedπ....";
  if (!computerWinner && !yourWinner)
    document.getElementById("result").style.color = "#8e24b5";
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}