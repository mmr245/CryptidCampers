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
let selectedWord: string;
let guessedLetters: string[] = [];
let remainingAttempts: number = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingAttempts = 6;
    updateGameDisplay();
}

function updateGameDisplay() {
    const wordDisplay = document.getElementById("word-display");
    const attemptsDisplay = document.getElementById("attempts");
    const guessedDisplay = document.getElementById("guessed-letters");

    if (wordDisplay && attemptsDisplay && guessedDisplay) {
        wordDisplay.textContent = selectedWord.split("")
            .map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
        attemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;
        guessedDisplay.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
    }
}

function handleGuess(letter: string) {
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

function checkGameStatus() {
    const wordDisplay = document.getElementById("word-display");
    if (wordDisplay) {
        const currentDisplay = wordDisplay.textContent;
        if (!currentDisplay.includes("_")) {
            alert("Congratulations! You've guessed the word!");
            startGame();
        } else if (remainingAttempts === 0) {
            alert(`Game over! The word was: ${selectedWord}`);
            startGame();
        }
    }
}

// Set up event listeners
document.getElementById("start-game")?.addEventListener("click", startGame);
document.getElementById("guess-button")?.addEventListener("click", () => {
    const input = (document.getElementById("guess-input") as HTMLInputElement);
    const letter = input.value.toLowerCase();
    input.value = "";
    handleGuess(letter);
});

