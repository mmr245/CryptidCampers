const words = [
  { word: "oracle", hint: "A mystical prophet who foresees the future." },
  { word: "crystal", hint: "A gemstone often used in mystical practices." },
  { word: "spirit", hint: "An unseen mystical essence or ghost." },
  { word: "moon", hint: "A celestial body associated with magic and mystery." },
  { word: "enchant", hint: "To cast a spell or charm." },
  { word: "amulet", hint: "A magical charm worn for protection." },
  { word: "alchemy", hint: "Ancient mystical science of transforming matter." },
  { word: "spell", hint: "A magical word or phrase." }
];

let selectedWord = "";
let currentHint = "";
let guessedLetters: string[] = [];
let remainingAttempts = 6;

const wordDiv = document.getElementById("word")!;
const attemptsDiv = document.getElementById("attempts")!;
const guessedDiv = document.getElementById("letters-guessed")!;
const hintDiv = document.getElementById("hint")!;
const messageDiv = document.getElementById("message")!;
const guessInput = document.getElementById("guess-input") as HTMLInputElement;
const guessBtn = document.getElementById("guess-btn")!;
const newGameBtn = document.getElementById("new-game-btn")!;
const mysticImage = document.getElementById("mystic-image") as HTMLImageElement;
const letterBankDiv = document.getElementById("letter-bank")!;

function startGame() {
  const index = Math.floor(Math.random() * words.length);
  selectedWord = words[index].word;
  currentHint = words[index].hint;
  guessedLetters = [];
  remainingAttempts = 6;
  messageDiv.textContent = "";
  updateDisplay();
}

// Update display
function updateDisplay() {
  let displayWord = "";
  for (let ch of selectedWord) {
    displayWord += guessedLetters.includes(ch) ? ch + " " : "_ ";
  }
  wordDiv.textContent = displayWord.trim();
  attemptsDiv.textContent = "Attempts left: " + remainingAttempts;
  guessedDiv.textContent = "Letters guessed: " + guessedLetters.join(", ");
  hintDiv.textContent = "Hint: " + currentHint;
  updateImage();
  updateLetterBank();
}

// Update image based on attempts
function updateImage() {
  const index = 6 - remainingAttempts; // 0 to 6
  // Use images named hangman0.png to hangman6.png placed in 'images' folder
  mysticImage.src = `images/hangman${index}.png`;
}

// Show guessed letters in letter bank
function updateLetterBank() {
  let bank = "";
  for (let ch of "abcdefghijklmnopqrstuvwxyz") {
    if (guessedLetters.includes(ch)) {
      bank += ch.toUpperCase() + " ";
    } else {
      bank += ch + " ";
    }
  }
  document.getElementById("letter-bank")!.textContent = bank;
}

// Handle guess
function handleGuess() {
  const guess = guessInput.value.toLowerCase();
  guessInput.value = "";

  if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
    alert("Enter a single letter");
    return;
  }
  if (guessedLetters.includes(guess)) {
    alert("Letter already guessed");
    return;
  }

  guessedLetters.push(guess);

  if (selectedWord.includes(guess)) {
    if (isWin()) {
      messageDiv.textContent = "✨ You found the mystic word! ✨";
    }
  } else {
    remainingAttempts--;
    if (remainingAttempts === 0) {
      messageDiv.textContent = "☠️ The spirits have forsaken you! Word was: " + selectedWord;
    }
  }
  updateDisplay();
}

// Check for win
function isWin() {
  return selectedWord.split("").every((ch) => guessedLetters.includes(ch));
}

// Event listeners
document.getElementById("guess-btn")!.addEventListener("click", handleGuess);
document.getElementById("new-game-btn")!.addEventListener("click", startGame);
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleGuess();
});

// Start first game
startGame();
