"usestrict";
const words = [
    "Cryptid", "Mystic", "Campfire", "Tentacle", "Sasquatch", "Bigfoot",
    "Nessie", "Yeti", "Chupacabra", "Moonlit", "Enchanted", "Whispering",
    "Mysterious", "Legendary", "Wilderness", "Outlandish", "Haunted",
    "Paranormal", "Uncanny", "Foggy", "Ethereal", "Fabled", "Spectral",
    "Eldritch", "Shadowy", "Ghoulish", "Arcane", "Eerie", "Phantom", "Enigma",
    "Whimsical", "Serpentine", "Twilight", "Glimmering", "Hidden", "Shrouded",
    "Unseen", "Mythic", "Roving", "Adventurous", "Expedition", "Quest",
    "Trailblazing", "Nightfall", "Forested", "Overgrown", "Wildwood",
    "Moonshine", "Stardust", "Celestial", "Conjured", "Bewitched", "Intriguing",
    "Spooky", "Cursed", "Mirage", "Cryptic", "Phantomlike", "Feral", "Quirky",
    "Weird", "Uncharted", "Expanse", "Abyss", "Arcadia", "Nomadic", "Campground",
    "Hideaway", "Roaming", "Vagabond", "Wanderlust", "Expeditionary", "Outpost",
    "Basecamp", "Stargazing", "Dreamscape", "Nebulous", "Shimmering",
    "Spellbound", "Fogbound", "Gossamer", "Intricate", "Timeless", "Lore",
    "Mythos", "Rune", "Totem", "Potion", "Fable", "Saga", "Chronicle",
    "Questing", "Spellcraft", "Wandering", "Labyrinth", "Underbrush",
    "Nightshade", "Boondock", "Enchantment", "Firefly"
  ];
  
  const wordHints = {
    cryptid: "A creature whose existence is not substantiated by evidence.",
    mystic: "Related to supernatural phenomena.",
    campfire: "A fire used for cooking and warmth while camping.",
    tentacle: "A long, flexible limb found on certain animals.",
    sasquatch: "A large, hairy humanoid creature said to inhabit North America.",
    bigfoot: "Another name for Sasquatch.",
    nessie: "A legendary creature said to inhabit Loch Ness in Scotland.",
    yeti: "A mythical ape-like creature said to inhabit the Himalayas.",
    chupacabra: "A creature in folklore that drinks the blood of livestock.",
    moonlit: "Illuminated by the light of the moon.",
    enchanted: "Under a spell or magic.",
    whispering: "Speaking softly or quietly.",
    mysterious: "Something that is difficult or impossible to understand.",
    legendary: "Famous and well-known, often in folklore.",
    wilderness: "A natural environment that has not been significantly modified by human activity.",
    outlandish: "Strange or unusual.",
    haunted: "Visited by ghosts or spirits.",
    paranormal: "Events or phenomena that are beyond the scope of normal scientific understanding.",
    uncanny: "Strange or mysterious, especially in an unsettling way.",
    foggy: "Filled with thick mist or low clouds.",
    ethereal: "Extremely delicate and light in a way that seems not of this world.",
    fabled: "Famous, especially by reputation.",
    spectral: "Relating to or resembling a ghost.",
    eldritch: "Weird and sinister or ghostly.",
    shadowy: "Full of shadows or not clearly seen.",
    ghoulish: "Strangely diabolical or cruel; monstrous.",
    arcane: "Understood by few; mysterious or secret.",
    eerie: "Strange and frightening.",
    phantom: "A ghost.",
    enigma: "A person or thing that is mysterious or difficult to understand."
    // Add more hints if needed
  };
  
  let selectedWord = "";
  let currentHint = "";
  let guessedLetters = [];
  let remainingAttempts = 6;
  
  // Function to start or restart the game
  function startGame() {
    // Pick a random word
    const wordsArray = Object.keys(wordHints);
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    selectedWord = wordsArray[randomIndex];
    currentHint = wordHints[selectedWord];
    guessedLetters = [];
    remainingAttempts = 6;
    updateGameDisplay();
  }
  
  // Function to update the display based on game state
  function updateGameDisplay() {
    const wordDisplay = document.getElementById("word-display");
    const attemptsDisplay = document.getElementById("attempts");
    const guessedDisplay = document.getElementById("guessed-letters");
    const hintDisplay = document.getElementById("hint");
    const hangmanImage = document.getElementById("hangman-image");
  
    if (
      wordDisplay &&
      attemptsDisplay &&
      guessedDisplay &&
      hintDisplay &&
      hangmanImage
    ) {
      const displayWord = selectedWord
        .split("")
        .map((letter) =>
          guessedLetters.includes(letter) ? letter : "_"
        )
        .join(" ");
      wordDisplay.textContent = displayWord;
      attemptsDisplay.textContent = "Remaining Attempts: " + remainingAttempts;
      guessedDisplay.textContent = "Guessed Letters: " + guessedLetters.join(", ");
      hintDisplay.textContent = "Hint: " + currentHint;
      updateHangman();
    }
  }
  
  // Function to update hangman image based on remaining attempts
  function updateHangman() {
    const hangmanImage = document.getElementById("hangman-image");
    if (hangmanImage) {
      hangmanImage.src = "../../images/hangman-" + remainingAttempts + ".png";
    }
  }
  
  // Function to handle a guessed letter
  function handleGuess(letter) {
    letter = letter.toLowerCase();
    if (guessedLetters.includes(letter) || remainingAttempts <= 0) {
      return;
    }
    guessedLetters.push(letter);
    if (!selectedWord.includes(letter)) {
      remainingAttempts--;
    }
    updateGameDisplay();
    checkGameStatus();
  }
  
  // Function to check if game is won or lost
  function checkGameStatus() {
    const wordDisplay = document.getElementById("word-display");
    if (wordDisplay) {
      const currentDisplay = wordDisplay.textContent || "";
      if (!currentDisplay.includes("_")) {
        alert("Congratulations! You've guessed the word!");
        startGame();
      } else if (remainingAttempts === 0) {
        alert("Game over! The word was: " + selectedWord);
        startGame();
      }
    }
  }
  
  // Expose startGame globally
  if (typeof window !== 'undefined') {
    window.startGame = startGame;
  }
  
  // Initialize game on page load
  window.addEventListener("DOMContentLoaded", () => {
    startGame();
  });
  
  // Handle "Start New Game" button click
  const startBtn = document.getElementById("start-game");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (window.startGame) {
        window.startGame();
      }
    });
  }
  
  // Handle "Guess" button click
  const guessBtn = document.getElementById("guess-button");
  if (guessBtn) {
    guessBtn.addEventListener("click", () => {
      const input = document.getElementById("guess-input");
      if (input instanceof HTMLInputElement) {
        const letter = input.value.trim();
        input.value = "";
        if (letter.length === 1 && /^[a-zA-Z]$/.test(letter)) {
          handleGuess(letter);
        } else {
          alert("Please enter a single letter.");
        }
      }
    });
  }
  