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

let selectedWord: string;
let currentHint: string;
let guessedLetters: string[] = [];
let remainingAttempts: number = 6;

function startGame(): void {
    const randomIndex = Math.floor(Math.random() * wordHints.length);
    selectedWord = wordHints[randomIndex].word.toLowerCase();
    currentHint = wordHints[randomIndex].hint;
    guessedLetters = [];
    remainingAttempts = 6;
    updateGameDisplay();
}

function updateGameDisplay(): void {
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
        hintDisplay.textContent = `Hint: ${currentHint}`; // Show the hint
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
