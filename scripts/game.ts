const words = [
  { word: "oracle", hint: "A mystical prophet who foresees the future." },
  { word: "crystal", hint: "A gemstone often used in mystical practices." },
  { word: "spirit", hint: "An unseen mystical essence or ghost." },
  { word: "moon", hint: "A celestial body associated with magic and mystery." },
  { word: "enchant", hint: "To cast a spell or charm." },
  { word: "amulet", hint: "A magical charm worn for protection." },
  { word: "alchemy", hint: "Ancient mystical science of transforming matter." },
  { word: "spell", hint: "A magical word or phrase." },
  { word: "conjuration", hint: "The act or process of summoning a spirit by magic." },
  { word: "incantation", hint: "A chant or formula of words spoken or sung as a magical charm." },
  { word: "necromancy", hint: "The practice of communicating with the dead to predict the future." },
  { word: "clairvoyance", hint: "The ability to perceive events beyond normal sensory contact." },
  { word: "divination", hint: "The art of foretelling future events by interpreting omens." },
  { word: "telekinesis", hint: "The supposed psychic power to move objects at a distance." },
  { word: "enchantment", hint: "A magical spell that captivates or bewitches the mind." },
  { word: "transmutation", hint: "The alchemical process of changing one substance into another." },
  { word: "transfiguration", hint: "The act of magically changing one’s form or appearance." },
  { word: "manifestation", hint: "The act of something materializing or appearing in reality." },
  { word: "rune", hint: "A symbol believed to hold magical power." },
  { word: "potion", hint: "A liquid mixture used in magical rituals." },
  { word: "talisman", hint: "An object believed to bring good luck or protection." },
  { word: "phoenix", hint: "A mythical bird that is reborn from its ashes." },
  { word: "dragon", hint: "A legendary fire-breathing reptile." },
  { word: "coven", hint: "A gathering of witches." },
  { word: "wizard", hint: "A practitioner of magic, often wise and old." },
  { word: "cauldron", hint: "A large pot used by witches to brew potions." },
  { word: "sigil", hint: "A magical symbol believed to attract power." },
  { word: "arcane", hint: "Known or understood by only a few; mysterious." },
  { word: "mystic", hint: "Someone who seeks hidden spiritual truths." },
  { word: "astral", hint: "Relating to the stars or spiritual realms." }
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
const guessBtn = document.getElementById("guess-btn") as HTMLButtonElement;
const newGameBtn = document.getElementById("new-game-btn") as HTMLButtonElement;
const guessWordBtn = document.getElementById("guess-word-btn") as HTMLButtonElement;
const mysticImage = document.getElementById("hangman-image") as HTMLImageElement;
const letterBankDiv = document.getElementById("letter-bank")!;
const fullWordInput = document.getElementById("full-word-input") as HTMLInputElement;

function startGame() {
  const index = Math.floor(Math.random() * words.length);
  selectedWord = words[index].word;
  currentHint = words[index].hint;
  guessedLetters = [];
  remainingAttempts = 6;
  if (messageDiv) messageDiv.textContent = "";

  //hides hint upon starting
  hintDiv.style.display = 'none';
  hintDiv.textContent = '';
  hintBtn.disabled = false;
  fullWordInput.value = "";
  guessWordBtn.disabled = false;

  updateDisplay();
}

const hintBtn = document.getElementById('hint-btn') as HTMLButtonElement;
hintBtn.addEventListener('click', () => {
  hintDiv.style.display = 'block';
  hintDiv.textContent = "Hint: " + currentHint;
  hintBtn.disabled = true;
});

// Update display
function updateDisplay() {
  let displayWord = "";
  for (let ch of selectedWord) {
    displayWord += guessedLetters.includes(ch) ? ch + " " : "_ ";
  }
  if (wordDiv) wordDiv.textContent = displayWord.trim();
  if (attemptsDiv) attemptsDiv.textContent = "Attempts left: " + remainingAttempts;
  if (guessedDiv) guessedDiv.textContent = "Letters guessed: " + guessedLetters.join(", ");
  updateImage();
  updateLetterBank();
}

// Update image based on remaining attempts
function updateImage() {
  if (mysticImage) {
    // if remainingAttempts goes 6 → 0, but your files go 0 → 6:
    const stage = 6 - remainingAttempts;
    mysticImage.src = `/images/game/hangman-${stage}.png`;
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
  if (remainingAttempts <= 0 || isWin()) return; //bail out if they win or run out of guesses
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
  const guess = fullWordInput.value.trim().toLowerCase();
  fullWordInput.value = "";

  if (!guess) {
    alert("Please enter your full word guess.");
    return;
  }

  if (guess === selectedWord) {
    // Reveal entire word & win
    guessedLetters = selectedWord.split("");
    updateDisplay();
    messageDiv.textContent = "✨ You guessed the word! ✨";
    endGameCleanup();

  } else {
    // Wrong full-word guess: immediate loss
    remainingAttempts = 0;
    updateDisplay();
    messageDiv.textContent = `☠️ Wrong! The word was: ${selectedWord}`;
    endGameCleanup();
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
if (guessInput) {
  guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
  });
}
if (newGameBtn) newGameBtn.addEventListener("click", startGame);

guessWordBtn.addEventListener("click", handleFullWordGuess);
fullWordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleFullWordGuess();
});

if (fullWordInput) fullWordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleFullWordGuess();
});

// Handle letter guesses via clicking in the letter bank
// (exposed globally above)

// Handle letter guess input
function handleGuess() {
  const input = document.getElementById("guess-input");
  if (remainingAttempts <= 0 || isWin()) return; //bail out if they win or run out of guesses

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

// ends the game and disables further input
function endGameCleanup() {
  guessBtn.disabled = true;
  guessInput.disabled = true;
  guessWordBtn.disabled = true;
  fullWordInput.disabled = true;
  // gray-out letter bank:
  letterBankDiv.querySelectorAll('span').forEach(el => {
    (el as HTMLElement).style.pointerEvents = 'none';
    (el as HTMLElement).style.opacity = '0.5';
  });
}

// then after you detect zero attempts or a win:
if (remainingAttempts === 0 || isWin()) {
  endGameCleanup();
}

// Start a new game on load
startGame();
