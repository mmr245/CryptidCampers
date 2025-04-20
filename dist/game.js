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
  let selectedWord;
  let guessedLetters = [];
  let remainingAttempts = 6;

  function startGame() {
      selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
      guessedLetters = [];
      remainingAttempts = 6;
      updateGameDisplay();
  }

  function updateGameDisplay() {
      const wordDisplay = document.getElementById("word-display");
      const attemptsDisplay = document.getElementById("attempts");
      const guessedDisplay = document.getElementById("guessed-letters");
      const letterBankDisplay = document.getElementById("letter-bank");
      const hintDisplay = document.getElementById("hint");

      if (wordDisplay && attemptsDisplay && guessedDisplay && letterBankDisplay && hintDisplay) {
          // Create display with dashes for unguessed letters
          const displayWord = selectedWord.split("")
              .map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
          wordDisplay.textContent = displayWord; // Show current state of the word
          attemptsDisplay.textContent = Remaining Attempts: ${remainingAttempts};
          guessedDisplay.textContent = Guessed Letters: ${guessedLetters.join(", ")};

          // Display the hint for the selected word
          hintDisplay.textContent = Hint: ${getHint(selectedWord)}; // Replace with your hint logic
      }
  }

  function getHint(word) {
      const hints = {
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
          foggy: "Full of fog; unclear.",
          ethereal: "Extremely delicate and light in a way that seems too perfect for this world."
          // Add more words and hints as needed
      };
      return hints[word] || "No hint available.";
  }
  function updateHangman() {
      const hangmanImage = document.getElementById("hangman-image");
      if (hangmanImage) {
          hangmanImage.src = images/hangman-${remainingAttempts}.png; // Update hangman image based on remaining attempts
      }
  }

  function handleGuess(letter) {
      if (guessedLetters.includes(letter) || remainingAttempts  {
      const input = document.getElementById("guess-input");
      const letter = input.value.toLowerCase();
      input.value = "";
      if (letter.length === 1 && /^[a-z]$/.test(letter)) { // Check for a single letter
          handleGuess(letter);
      } else {
          alert("Please enter a single letter.");
      }
  });