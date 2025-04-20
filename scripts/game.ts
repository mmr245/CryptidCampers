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
const fullWordInput = document.getElementById("full-word-input") as HTMLInputElement;
const guessWordBtn = document.getElementById("guess-word-btn")!;

function startGame() {
  const index = Math.floor(Math.random() * words.length);
  selectedWord = words[index].word;
  currentHint = words[index].hint;
  guessedLetters = [];
  remainingAttempts = 6;
  if (messageDiv) messageDiv.textContent = "";
  updateDisplay();
}

// Update display
function updateDisplay() {
  let displayWord = "";
  for (let ch of selectedWord) {
    displayWord += guessedLetters.includes(ch) ? ch + " " : "_ ";
  }
  if (wordDiv) wordDiv.textContent = displayWord.trim();
  if (attemptsDiv) attemptsDiv.textContent = "Attempts left: " + remainingAttempts;
  if (guessedDiv) guessedDiv.textContent = "Letters guessed: " + guessedLetters.join(", ");
  if (hintDiv) hintDiv.textContent = "Hint: " + currentHint;
  updateImage();
  updateLetterBank();
}

// Update image based on remaining attempts
function updateImage() {
  if (mysticImage) {
    mysticImage.src = `images/hangman-${remainingAttempts}.png`;
  }
}

// Generate the alphabet letter bank
function updateLetterBank() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let html = "";
  for (let ch of alphabet) {
    const lowerCh = ch.toLowerCase();
    if (guessedLetters.includes(lowerCh)) {
      html += `<span style="color: gray; margin: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; background-color: #222;">${ch}</span>`;
    } else {
      html += `<span style="color: #fff; margin: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; background-color: #444; cursor: pointer;" onclick="guessLetter('${lowerCh}')">${ch}</span>`;
    }
  }
  if (letterBankDiv) letterBankDiv.innerHTML = html;
}

// Function to handle clicking on a letter in the letter bank
function guessLetter(letter: string) {
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    if (!selectedWord.includes(letter)) {
      remainingAttempts--;
    }
    updateDisplay();
    checkGameStatus();
  }
}
// Make guessLetter globally accessible for inline HTML onclick
if (typeof window !== "undefined") {
  (window as any).guessLetter = guessLetter;
}

// Handle full word guess
function handleFullWordGuess() {
  const guess = fullWordInput.value.toLowerCase().trim();
  fullWordInput.value = "";
  if (!guess) {
    alert("Please enter your full word guess.");
    return;
  }
  if (guess === selectedWord) {
    // Player guessed correctly!
    guessedLetters = Array.from(new Set(selectedWord.split())); // reveal all
    updateDisplay();
    if (messageDiv) messageDiv.textContent = "✨ Correct! You guessed the full word! ✨";
  } else {
    // Wrong guess: penalize attempts
    remainingAttempts--;
    updateDisplay();
    if (remainingAttempts === 0) {
      if (messageDiv) messageDiv.textContent = "☠️ Wrong! The word was: " + selectedWord;
    }
  }
}

// Check game over
function checkGameStatus() {
  if (isWin()) {
    if (messageDiv) messageDiv.textContent = "✨ You found the mystic word! ✨";
  } else if (remainingAttempts === 0) {
    if (messageDiv) messageDiv.textContent = "☠️ The spirits have forsaken you! Word was: " + selectedWord;
  }
}

// Win condition
function isWin() {
  return selectedWord.split("").every((ch) => guessedLetters.includes(ch));
}

// Event listeners
if (guessBtn) guessBtn.addEventListener("click", handleGuess);
if (document.getElementById("guess-input")) {
  document.getElementById("guess-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
  });
}
if (newGameBtn) newGameBtn.addEventListener("click", startGame);
if (guessWordBtn) guessWordBtn.addEventListener("click", handleFullWordGuess);
if (fullWordInput) fullWordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleFullWordGuess();
});

// Handle letter guesses via clicking in the letter bank
// (exposed globally above)

// Handle letter guess input
function handleGuess() {
  const input = document.getElementById("guess-input");
  if (input instanceof HTMLInputElement) {
    const val = input.value.toLowerCase();
    input.value = "";
    if (!val || val.length !== 1 || !/[a-z]/.test(val)) {
      alert("Enter a single letter");
      return;
    }
    if (guessedLetters.includes(val)) {
      alert("Letter already guessed");
      return;
    }
    guessedLetters.push(val);
    if (selectedWord.includes(val)) {
      if (isWin()) {
        if (messageDiv) messageDiv.textContent = "✨ You found the mystic word! ✨";
      }
    } else {
      remainingAttempts--;
      if (remainingAttempts === 0) {
        if (messageDiv) messageDiv.textContent = "☠️ The spirits have forsaken you! Word was: " + selectedWord;
      }
    }
    updateDisplay();
  }
}

// Start a new game on load
startGame();
