"use strict";
const words = [
    "cryptid", "mystic", "campfire", "tentacle", "sasquatch",
    "bigfoot", "nessie", "yeti", "chupacabra", "moonlit",
    "enchanted", "whispering", "mysterious", "legendary", 
    "wilderness", "outlandish", "haunted", "paranormal",
    "uncanny", "foggy", "ethereal", "fabled", "spectral",
    "eldritch", "shadowy", "ghoulish", "arcane", "eerie",
    "phantom", "enigma", "whimsical", "serpentine", 
    "twilight", "glimmering", "hidden", "shrouded", 
    "unseen", "mythic", "roving", "adventurous", 
    "expedition", "quest", "trailblazing", "nightfall", 
    "forested", "overgrown", "wildwood", "moonshine", 
    "stardust", "celestial", "conjured", "bewitched", 
    "intriguing", "spooky", "cursed", "mirage", 
    "cryptic", "phantomlike", "feral", "quirky", 
    "weird", "uncharted", "expanse", "abyss", 
    "arcadia", "nomadic", "campground", "hideaway", 
    "roaming", "vagabond", "wanderlust", "expeditionary", 
    "outpost", "basecamp", "stargazing", "dreamscape", 
    "nebulous", "shimmering", "spellbound", "fogbound", 
    "gossamer", "intricate", "timeless", "lore", "mythos",
    "rune", "totem", "potion", "fable", "saga",
    "chronicle", "questing", "spellcraft", "wandering", 
    "labyrinth", "underbrush", "nightshade", "boondock", 
    "enchantment", "firefly"
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
        attemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;
        guessedDisplay.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
        
        // Display the hint for the selected word
        hintDisplay.textContent = `Hint: ${getHint(selectedWord)}`; // Replace with your hint logic
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

function handleGuess(letter) {
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

function checkGameStatus() {
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
    const input = document.getElementById("guess-input");
    const letter = input.value.toLowerCase();
    input.value = "";
    if (letter.length === 1 && /^[a-z]$/.test(letter)) { // Check for a single letter
        handleGuess(letter);
    } else {
        alert("Please enter a single letter.");
    }
});
