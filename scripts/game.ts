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
    // ...add more as needed
  ];
  
  interface WordHint {
    word: string;
    hint: string;
  }
  
  // Game state variables
  let selectedWord: string;
  let currentHint: string;
  let guessedLetters: string[] = [];
  let remainingAttempts: number = 6;
  
  // Initialize game with no tick marks, scaffold only
  function startGame() {
    const randomIndex = Math.floor(Math.random() * wordHints.length);
    selectedWord = wordHints[randomIndex].word.toLowerCase();
    currentHint = wordHints[randomIndex].hint;
    guessedLetters = [];
    remainingAttempts = 6;
    // Generate letter bank with only letters in the word
    updateGameDisplay();
    updateHangman();
  }
  
  // Update display: word, attempts, guessed, hint, letter bank
  function updateGameDisplay() {
    const wordDisplay = document.getElementById("word-display");
    const attemptsDisplay = document.getElementById("attempts");
    const guessedDisplay = document.getElementById("guessed-letters");
    const hintDisplay = document.getElementById("hint");
    const letterBankDiv = document.getElementById("letter-bank");
    const hangmanImg = document.getElementById("hangman-image");
  
    if (
      wordDisplay &&
      attemptsDisplay &&
      guessedDisplay &&
      hintDisplay &&
      letterBankDiv &&
      hangmanImg
    ) {
      // Show only the guessed letters or underscores
      const displayWord = selectedWord
        .split("")
        .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
      wordDisplay.textContent = displayWord;
      attemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;
      guessedDisplay.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
      hintDisplay.textContent = `Hint: ${currentHint}`;
  
      // Show only the letters in the word
      const uniqueLetters = Array.from(new Set(selectedWord.split("")));
      const remainingLetters = uniqueLetters.filter(
        (letter) => !guessedLetters.includes(letter)
      );
      letterBankDiv.textContent =
        "Letter Bank: " + remainingLetters.join(", ").toUpperCase();
  
      // Show initial scaffold (no tick marks)
      hangmanImg.src = "../../images/hangman-6.png";
    }
  }
  
  // Update hangman image based on remaining attempts
  function updateHangman() {
    const hangmanImg = document.getElementById("hangman-image");
    if (hangmanImg) {
      hangmanImg.src = `../../images/hangman-${
  