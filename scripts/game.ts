const words = [
    { word: "oracle", hint: "A mystical prophet who foresees the future." },
    { word: "crystal", hint: "A gemstone often used in mystical practices." },
    { word: "spirit", hint: "An unseen mystical essence or ghost." },
    { word: "moon", hint: "A celestial body associated with magic and mystery." },
    { word: "enchant", hint: "To cast a spell or charm." },
    { word: "amulet", hint: "A magical charm worn for protection." },
    { word: "alchemy", hint: "Ancient mystical science of transforming matter." },
    { word: "spell", hint: "A magical word or phrase." }
  ];
  
  let selectedWord = "";
  let currentHint = "";
  let guessedLetters: string[] = [];
  let remainingAttempts = 6;
  
  const wordDiv = document.getElementById("word")!;
  const attemptsDiv = document.getElementById("attempts")!;
  const guessedDiv = document.getElementById("letters-guessed")!;
  const hintDiv = document.getElementById("hint")!;
  const messageDiv = document.getElementById("message")!;
  const guessInput = document.getElementById("guess-input") as HTMLInputElement;
  const guessBtn = document.getElementById("guess-btn")!;
  const newGameBtn = document.getElementById("new-game-btn")!;
  const mysticImage = document.getElementById("mystic-image") as HTMLImageElement;
  const letterBankDiv = document.getElementById("letter-bank")!;
  
  function startGame() {
    const index = Math.floor(Math.random() * words.length);
    selectedWord = words[index].word;
    currentHint = words[index].hint;
    guessedLetters = [];
    remainingAttempts = 6;
    messageDiv.textContent = "";
    updateDisplay();
  }
  
  // Update display
  function updateDisplay() {
    let displayWord = "";
    for (let ch of selectedWord) {
      displayWord += guessedLetters.includes(ch) ? ch + " " : "_ ";
    }
    wordDiv.textContent = displayWord.trim();
    attemptsDiv.textContent = "Attempts left: " + remainingAttempts;
    guessedDiv.textContent = "Letters guessed: " + guessedLetters.join(", ");
    hintDiv.textContent = "Hint: " + currentHint;
    updateImage();
    updateLetterBank();
  }
  
  // Update image based on attempts
  function updateImage() {
    const index = 6 - remainingAttempts;
    mysticImage.src = `images/hangman${index}.png`;
  }
  
  // Generate the alphabet letter bank
  function updateLetterBank() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let html = "";
    for (let ch of alphabet) {
      const lowerCh = ch.toLowerCase();
      if (guessedLetters.includes(lowerCh)) {
        html += `<span style="color: gray; margin: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; background-color: #222;">${ch}</span>`;
      } else {
        html += `<span style="color: #fff; margin: 4px; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; background-color: #444; cursor: pointer;" onclick="guessLetter('${lowerCh}')">${ch}</span>`;
      }
    }
    document.getElementById("letter-bank")!.innerHTML = html;
  }
  
  // Global function to handle letter clicks
  function guessLetter(letter: string) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!selectedWord.includes(letter)) {
        remainingAttempts--;
      }
      updateDisplay();
      checkGameStatus();
    }
  }
  
  // Check game over
  function checkGameStatus() {
    if (isWin()) {
      messageDiv.textContent = "✨ You found the mystic word! ✨";
    } else if (remainingAttempts === 0) {
      messageDiv.textContent = "☠️ The spirits have forsaken you! Word was: " + selectedWord;
    }
  }
  
  // Win condition
  function isWin() {
    return selectedWord.split("").every(ch => guessedLetters.includes(ch));
  }
  
  // Event handlers
  document.getElementById("guess-btn")!.addEventListener("click", handleGuess);
  document.getElementById("new-game-btn")!.addEventListener("click", startGame);
  document.getElementById("guess-input")!.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
  });
  
  // Make guessLetter globally accessible for inline onclick
  if (typeof window !== 'undefined') {
    (window as any).guessLetter = guessLetter;
  }
  
  // Initialize game
  startGame();
  