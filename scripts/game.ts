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

function startGame(): void {
selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
guessedLetters = [];
remainingAttempts = 6;
updateGameDisplay();
}

function updateGameDisplay(): void {
const wordDisplay = document.getElementById("word-display");
const attemptsDisplay = document.getElementById("attempts");
const guessedDisplay = document.getElementById("guessed-letters");
const letterBankDisplay = document.getElementById("letter-bank");

if (wordDisplay && attemptsDisplay && guessedDisplay && letterBankDisplay) {
    // Create display with dashes for unguessed letters
    const displayWord = selectedWord.split("")
        .map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
    wordDisplay.textContent = displayWord; // Show current state of the word
    attemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;
    guessedDisplay.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
    letterBankDisplay.textContent = `Letter Bank: ${guessedLetters.join(", ")}`; // Update letter bank
}
}

function handleGuess(letter: string): void {
if (guessedLetters.includes(letter) || remainingAttempts <= 0) {
    return; // Ignore if already guessed or game is over
}
guessedLetters.push(letter);

if (!selectedWord.includes(letter)) {
    remainingAttempts--; // Deduct an attempt if the letter is not in the word
}
updateGameDisplay(); // Update the display after the guess
checkGameStatus(); // Check if the game has been won or lost
}

function checkGameStatus(): void {
const wordDisplay = document.getElementById("word-display");
if (wordDisplay) {
    const currentDisplay = wordDisplay.textContent || "";
    if (!currentDisplay.includes("_")) {
        alert("Congratulations! You've guessed the word!");
        startGame(); // Restart the game
    } else if (remainingAttempts === 0) {
        alert(`Game over! The word was: ${selectedWord}`);
        startGame(); // Restart the game
    }
}
}

// Set up event listeners
document.getElementById("start-game")?.addEventListener("click", startGame);
document.getElementById("guess-button")?.addEventListener("click", () => {
const input = document.getElementById("guess-input") as HTMLInputElement;
const letter = input.value.toLowerCase();
input.value = "";
if (letter.length === 1 && /^[a-z]$/.test(letter)) { // Check for a single letter
    handleGuess(letter);
} else {
    alert("Please enter a single letter.");
}
});
