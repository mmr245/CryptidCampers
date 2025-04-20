"usestrict";
const words: string[] = [
  "Cryptid",
  "Mystic",
  "Campfire",
  "Tentacle",
  "Sasquatch",
  "Bigfoot",
  "Nessie",
  "Yeti",
  "Chupacabra",
  "Moonlit",
  "Enchanted",
  "Whispering",
  "Mysterious",
  "Legendary",
  "Wilderness",
  "Outlandish",
  "Haunted",
  "Paranormal",
  "Uncanny",
  "Foggy",
  "Ethereal",
  "Fabled",
  "Spectral",
  "Eldritch",
  "Shadowy",
  "Ghoulish",
  "Arcane",
  "Eerie",
  "Phantom",
  "Enigma",
  "Whimsical",
  "Serpentine",
  "Twilight",
  "Glimmering",
  "Hidden",
  "Shrouded",
  "Unseen",
  "Mythic",
  "Roving",
  "Adventurous",
  "Expedition",
  "Quest",
  "Trailblazing",
  "Nightfall",
  "Forested",
  "Overgrown",
  "Wildwood",
  "Moonshine",
  "Stardust",
  "Celestial",
  "Conjured",
  "Bewitched",
  "Intriguing",
  "Spooky",
  "Cursed",
  "Mirage",
  "Cryptic",
  "Phantomlike",
  "Feral",
  "Quirky",
  "Weird",
  "Uncharted",
  "Expanse",
  "Abyss",
  "Arcadia",
  "Nomadic",
  "Campground",
  "Hideaway",
  "Roaming",
  "Vagabond",
  "Wanderlust",
  "Expeditionary",
  "Outpost",
  "Basecamp",
  "Stargazing",
  "Dreamscape",
  "Nebulous",
  "Shimmering",
  "Spellbound",
  "Fogbound",
  "Gossamer",
  "Intricate",
  "Timeless",
  "Lore",
  "Mythos",
  "Rune",
  "Totem",
  "Potion",
  "Fable",
  "Saga",
  "Chronicle",
  "Questing",
  "Spellcraft",
  "Wandering",
  "Labyrinth",
  "Underbrush",
  "Nightshade",
  "Boondock",
  "Enchantment",
  "Firefly"
];
interface WordHint {
    word: string;
    hint: string;
}

const wordHints: WordHint[] = [
    { word: "cryptid", hint: "A creature whose existence is not substantiated by evidence." },
    { word: "mystic", hint: "Related to supernatural phenomena." },
    { word: "campfire", hint: "A fire used for cooking and warmth while camping." },
    { word: "tentacle", hint: "A long, flexible limb found on certain animals." },
    { word: "sasquatch", hint: "A large, hairy humanoid creature said to inhabit North America." },
    { word: "bigfoot", hint: "Another name for Sasquatch." },
    { word: "nessie", hint: "A legendary creature said to inhabit Loch Ness in Scotland." },
    { word: "yeti", hint: "A mythical ape-like creature said to inhabit the Himalayas." },
    { word: "chupacabra", hint: "A creature in folklore that drinks the blood of livestock." },
    { word: "moonlit", hint: "Illuminated by the light of the moon." },
    { word: "enchanted", hint: "Under a spell or magic." },
    { word: "whispering", hint: "Speaking softly or quietly." },
    { word: "mysterious", hint: "Something that is difficult or impossible to understand." },
    { word: "legendary", hint: "Famous and well-known, often in folklore." },
    { word: "wilderness", hint: "A natural environment that has not been significantly modified by human activity." },
    { word: "outlandish", hint: "Strange or unusual." },
    { word: "haunted", hint: "Visited by ghosts or spirits." },
    { word: "paranormal", hint: "Events or phenomena that are beyond the scope of normal scientific understanding." },
    { word: "uncanny", hint: "Strange or mysterious, especially in an unsettling way." },
    // Add more words and hints as needed
];

let selectedWord = "";
let currentHint = "";
let guessedLetters = [];
let remainingAttempts = 6;

function startGame() {
  const randIndex = Math.floor(Math.random() * wordHints.length);
  selectedWord = wordHints[randIndex].word.toLowerCase();
  currentHint = wordHints[randIndex].hint;
  guessedLetters = [];
  remainingAttempts = 6;
  updateGameDisplay();
  updateHangman();
}

// Show underscores and initialize everything
function updateGameDisplay() {
  const wordDisplay = document.getElementById("word-display");
  const attemptsDiv = document.getElementById("attempts");
  const guessedDiv = document.getElementById("guessed-letters");
  const hintDiv = document.getElementById("hint");
  const letterBankDiv = document.getElementById("letter-bank");
  const hangmanImg = document.getElementById("hangman-image");

  if (
    wordDisplay &&
    attemptsDiv &&
    guessedDiv &&
    hintDiv &&
    letterBankDiv &&
    hangmanImg
  ) {
    // Display underscores for unguessed
    const displayWord = selectedWord
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
    wordDisplay.textContent = displayWord;

    attemptsDiv.textContent = `Remaining Attempts: ${remainingAttempts}`;
    guessedDiv.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
    hintDiv.textContent = `Hint: ${currentHint}`;

    // Show only the letters in the word
    const uniqueLetters = Array.from(new Set(selectedWord.split("")));
    const remainingLetters = uniqueLetters.filter(
      (letter) => !guessedLetters.includes(letter)
    );
    letterBankDiv.textContent =
      "Letter Bank: " + remainingLetters.join(", ").toUpperCase();

    // Show scaffold (no tick marks)
    (hangmanImg).src = "../../images/hangman-6.png";
  }
}

function updateHangman() {
  const hangmanImg = document.getElementById("hangman-image");
  if (hangmanImg) {
    (hangmanImg).src = `../../images/hangman-${remainingAttempts}.png`;
  }
}

function handleGuess(letter) {
  if (remainingAttempts <= 0 || guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);
  if (!selectedWord.includes(letter)) {
    remainingAttempts--;
  }
  updateGameDisplay();
  checkGameStatus();
}

function checkGameStatus() {
  const wordDisplay = document.getElementById("word-display");
  if (wordDisplay) {
    const displayText = wordDisplay.textContent || "";
    if (!displayText.includes("_")) {
      alert("Congratulations! You guessed the word!");
    } else if (remainingAttempts === 0) {
      alert(`Game over! The word was: ${selectedWord}`);
    }
  }
}

// Setup event handlers after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-game")?.addEventListener("click", () => {
    startGame();
  });
  document.getElementById("guess-button")?.addEventListener("click", () => {
    const input = document.getElementById("guess-input");
    if (input && input.value) {
      const letter = input.value.toLowerCase();
      input.value = "";
      if (letter.length === 1 && /^[a-z]$/.test(letter)) {
        handleGuess(letter);
      } else {
        alert("Please enter a single letter");
      }
    }
  });
  // Set initial scaffold image
  const hangmanImg = document.getElementById("hangman-image");
  if (hangmanImg) {
    (hangmanImg).src = "../../images/hangman-6.png";
  }
});
