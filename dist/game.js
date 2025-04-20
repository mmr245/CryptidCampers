"use strict";
var words = [
  { word: "oracle", hint: "A mystical prophet who foresees the future." },
  { word: "crystal", hint: "A gemstone often used in mystical practices." },
  { word: "spirit", hint: "An unseen mystical essence or ghost." },
  { word: "moon", hint: "A celestial body associated with magic and mystery." },
  { word: "enchant", hint: "To cast a spell or charm." },
  { word: "amulet", hint: "A magical charm worn for protection." },
  { word: "alchemy", hint: "Ancient mystical science of transforming matter." },
  { word: "spell", hint: "A magical word or phrase." }
];

var selectedWord = "";
var currentHint = "";
var guessedLetters = [];
var remainingAttempts = 6;

var wordDiv = document.getElementById("word");
var attemptsDiv = document.getElementById("attempts");
var guessedDiv = document.getElementById("letters-guessed");
var hintDiv = document.getElementById("hint");
var messageDiv = document.getElementById("message");
var guessInput = document.getElementById("guess-input");
var guessBtn = document.getElementById("guess-btn");
var newGameBtn = document.getElementById("new-game-btn");
var mysticImage = document.getElementById("mystic-image");
var letterBankDiv = document.getElementById("letter-bank");
var fullWordInput = document.getElementById("full-word-input");
var guessWordBtn = document.getElementById("guess-word-btn");

// Start new game
function startGame() {
  var index = Math.floor(Math.random() * words.length);
  selectedWord = words[index].word;
  currentHint = words[index].hint;
  guessedLetters = [];
  remainingAttempts = 6;
  if (messageDiv) messageDiv.textContent = "";
  updateDisplay();
}

// Update game display
function updateDisplay() {
  var displayWord = "";
  for (var _i = 0, _a = selectedWord.split(""); _i < _a.length; _i++) {
    var ch = _a[_i];
    displayWord += guessedLetters.includes(ch) ? ch + " " : "_ ";
  }
  if (wordDiv) wordDiv.textContent = displayWord.trim();
  if (attemptsDiv) attemptsDiv.textContent = "Attempts left: " + remainingAttempts;
  if (guessedDiv) guessedDiv.textContent = "Letters guessed: " + guessedLetters.join(", ");
  if (hintDiv) hintDiv.textContent = "Hint: " + currentHint;
  updateImage();
  updateLetterBank();
}

// Update the image based on remaining attempts
function updateImage() {
  if (mysticImage) {
    mysticImage.src = "images/hangman-" + remainingAttempts + ".png";
  }
}

// Generate the alphabet letter bank
function updateLetterBank() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var html = "";
  for (var _b = 0, alphabet_1 = alphabet; _b < alphabet_1.length; _b++) {
    var ch = alphabet_1[_b];
    var lowerCh = ch.toLowerCase();
    if (guessedLetters.includes(lowerCh)) {
      html += "<span style=\"color: gray; margin: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; background-color: #222;\">" + ch + "</span>";
    } else {
      html += "<span style=\"color: #fff; margin: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; background-color: #444; cursor: pointer;\" onclick=\"guessLetter('" + lowerCh + "')\">" + ch + "</span>";
    }
  }
  if (letterBankDiv) letterBankDiv.innerHTML = html;
}

// Function to handle clicking on a letter in the letter bank
function guessLetter(letter) {
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
  window.guessLetter = guessLetter;
}

// Handle full word guess
function handleFullWordGuess() {
  var guess = fullWordInput.value.toLowerCase().trim();
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

// Handle guess input via the input box
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

// Start game on load
startGame();
