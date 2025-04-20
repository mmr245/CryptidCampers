"usestrict";
const wordHints = [
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
    { word: "foggy", hint: "Filled with thick mist or low clouds." },
    { word: "ethereal", hint: "Extremely delicate and light in a way that seems not of this world." },
    { word: "fabled", hint: "Famous, especially by reputation." },
    { word: "spectral", hint: "Relating to or resembling a ghost." },
    { word: "eldritch", hint: "Weird and sinister or ghostly." },
    { word: "shadowy", hint: "Full of shadows or not clearly seen." },
    { word: "ghoulish", hint: "Strangely diabolical or cruel; monstrous." },
    { word: "arcane", hint: "Understood by few; mysterious or secret." },
    { word: "eerie", hint: "Strange and frightening." },
    { word: "phantom", hint: "A ghost." },
    { word: "enigma", hint: "A person or thing that is mysterious or difficult to understand." },
];

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

let selectedWord = "";
let currentHint = "";
let guessedLetters = [];
let remainingAttempts = 6;
let gameActive = false;

function pickRandomWordHint() {
    const index = Math.floor(Math.random() * wordHints.length);
    return wordHints[index];
}

function updateHangmanImage() {
    const img = document.getElementById("hangman-image");
    if (img) {
        // Clamp to valid images
        let imgNum = remainingAttempts;
        if (imgNum < 0) imgNum = 0;
        if (imgNum > 6) imgNum = 6;
        img.src = `../../images/hangman-${imgNum}.png`;
    }
}

function updateWordDisplay() {
    const display = document.getElementById("word-display");
    if (display) {
        let html = "";
        for (let letter of selectedWord) {
            if (guessedLetters.includes(letter)) {
                html += `<span class="letter">${letter.toUpperCase()}</span> `;
            } else {
                html += `<span class="underscore">_</span> `;
            }
        }
        display.innerHTML = html.trim();
    }
}

function updateGuessedLetters() {
    const g = document.getElementById("guessed-letters");
    if (g) {
        g.textContent = "Guessed Letters: " + guessedLetters.map(l => l.toUpperCase()).join(" ");
    }
}

function updateAttempts() {
    const a = document.getElementById("attempts");
    if (a) {
        a.textContent = `Remaining Attempts: ${remainingAttempts}`;
    }
}

function updateHint() {
    const h = document.getElementById("hint");
    if (h) {
        h.textContent = `Hint: ${currentHint}`;
    }
}

function updateLetterBank() {
    const lb = document.getElementById("letter-bank");
    if (lb) {
        // Show clickable letter buttons, disabled if already guessed or game over
        lb.innerHTML = "";
        ALPHABET.forEach(letter => {
            const btn = document.createElement("button");
            btn.textContent = letter.toUpperCase();
            btn.className = "letter-btn";
            btn.disabled = guessedLetters.includes(letter) || !gameActive;
            btn.addEventListener("click", () => {
                if (gameActive) handleGuess(letter);
            });
            lb.appendChild(btn);
        });
    }
}

function updateStatusMessage(message, win=false) {
    const s = document.getElementById("status-message");
    if (s) {
        s.textContent = message;
        s.style.color = win ? "#2e8b57" : "#b22222";
    }
}

function resetStatusMessage() {
    const s = document.getElementById("status-message");
    if (s) s.textContent = "";
}

function setInputEnabled(enabled) {
    document.getElementById("guess-input").disabled = !enabled;
    document.getElementById("guess-button").disabled = !enabled;
}

function startGame() {
    const { word, hint } = pickRandomWordHint();
    selectedWord = word.toLowerCase();
    currentHint = hint;
    guessedLetters = [];
    remainingAttempts = 6;
    gameActive = true;
    resetStatusMessage();
    setInputEnabled(true);
    document.getElementById

