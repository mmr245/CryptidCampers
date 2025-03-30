"use strict";
/*This will be a word game like hang man or wordle-esque*/
var _a;
/* Creates a static list of 100 words i is 0-99 */
const cryptidCampWords = [
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
// Wait for the "Start Game" button to be clicked.
(_a = document.getElementById("startGame")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", startGame);
function startGame() {
    // Create and initialize our variables:
    // wordIndex: a random number between 0 and 99
    let wordIndex = Math.floor(Math.random() * 100);
    // mysteryWord: the word chosen from cryptidCampWords using wordIndex
    let mysteryWord = cryptidCampWords[wordIndex];
    // wordLength: the length of mysteryWord
    let wordLength = mysteryWord.length;
    // currentGuess: holds the current guessed letter
    let currentGuess = "";
    // guessedLetters: an array to store the letters the user has already guessed
    let guessedLetters = [];
    // mysteryArray: an array containing each character of the mystery word
    let mysteryArray = mysteryWord.split("");
    // Display the mystery word as empty boxes.
    // Each box corresponds to one letter of the mystery word.
    const gameBoard = document.getElementById("gameBoard");
    if (gameBoard) {
        gameBoard.innerHTML = ""; // Clear previous content if any.
        for (let i = 0; i < wordLength; i++) {
            const box = document.createElement("div");
            box.className = "box"; // Style this class in your CSS.
            // Initially, display an underscore (or leave empty) for each letter.
            box.textContent = "_";
            // Save the index so we know which box corresponds to which letter.
            box.setAttribute("data-index", i.toString());
            gameBoard.appendChild(box);
        }
    }
    // Get the letter input element.
    const letterInput = document.getElementById("letterInput");
    if (letterInput) {
        // Restrict the input to one character.
        letterInput.maxLength = 1;
        letterInput.value = "";
        // Add an event listener to process the entered letter.
        letterInput.addEventListener("keyup", (event) => {
            // Get the entered letter and convert it to lowercase.
            let letter = letterInput.value.trim().toLowerCase();
            // Ensure exactly one character is entered.
            if (letter.length !== 1) {
                return; // Do nothing if input is invalid.
            }
            // If the letter has already been guessed, show an error message.
            if (guessedLetters.includes(letter)) {
                alert("You guessed that letter already.");
            }
            else {
                // Otherwise, add the letter to guessedLetters and set currentGuess.
                guessedLetters.push(letter);
                currentGuess = letter;
                // Check the current guess against the mystery word.
                revealLetters(currentGuess, mysteryArray);
            }
            // Clear the input for the next guess.
            letterInput.value = "";
        });
    }
    // This function checks the current guess against each character in mysteryArray.
    // If a match is found, it updates the corresponding box to reveal the letter.
    function revealLetters(guess, wordArray) {
        // Loop over each character in the mystery word.
        wordArray.forEach((char, index) => {
            if (char.toLowerCase() === guess) {
                // If the guessed letter matches the character at this index,
                // update the corresponding box on the game board.
                const box = gameBoard === null || gameBoard === void 0 ? void 0 : gameBoard.querySelector(`div[data-index='${index}']`);
                if (box) {
                    box.textContent = char; // Reveal the letter.
                }
            }
        });
    }
}
