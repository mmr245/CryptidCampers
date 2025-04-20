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
        { word: "uncanny", hint: "Strange or mysterious, especially in an unsettling way." }
      ];
      
      interface WordHint {
        word: string;
        hint: string;
      }
      
      // Game state variables
      let selectedWord: string = "";
      let currentHint: string = "";
      let guessedLetters: string[] = [];
      let remainingAttempts: number = 6;
      
      // Function to start a new game
      function startGame(): void {
        const randomIndex = Math.floor(Math.random() * wordHints.length);
        selectedWord = wordHints[randomIndex].word.toLowerCase();
        currentHint = wordHints[randomIndex].hint;
        guessedLetters = [];
        remainingAttempts = 6;
        updateGameDisplay();
        updateHangman();
      }
      
      // Update the display: word, attempts, guessed, hint, letter bank
      function updateGameDisplay(): void {
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
          // Show underscores for unguessed letters
          const displayWord = selectedWord
            .split("")
            .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
            .join(" ");
          wordDisplay.textContent = displayWord;
      
          attemptsDisplay.textContent = `Remaining Attempts: ${remainingAttempts}`;
          guessedDisplay.textContent = `Guessed Letters: ${guessedLetters.join(", ")}`;
          hintDisplay.textContent = `Hint: ${currentHint}`;
      
          // Show only the unique letters in the word
          const uniqueLetters = Array.from(new Set(selectedWord.split("")));
          const remainingLetters = uniqueLetters.filter(
            (letter) => !guessedLetters.includes(letter)
          );
          letterBankDiv.textContent =
            "Letter Bank: " + remainingLetters.join(", ").toUpperCase();
      
          // Show only the scaffold (no tick marks)
          (hangmanImg as HTMLImageElement).src = "../../images/hangman-6.png";
        }
      }
      
      // Update hangman image based on remaining attempts
      function updateHangman(): void {
        const hangmanImg = document.getElementById("hangman-image");
        if (hangmanImg) {
          (hangmanImg as HTMLImageElement).src = `../../images/hangman-${remainingAttempts}.png`;
        }
      }
      
      // Handle user's guess
      function handleGuess(letter: string): void {
        if (remainingAttempts <= 0) return; // Game over
        if (guessedLetters.includes(letter)) return; // Already guessed
      
        guessedLetters.push(letter);
      
        if (!selectedWord.includes(letter)) {
          remainingAttempts--;
        }
      
        updateGameDisplay();
        checkGameStatus();
      }
      
      // Check if game is won or lost
      function checkGameStatus(): void {
        const wordDisplay = document.getElementById("word-display");
        if (wordDisplay) {
          const currentDisplay = wordDisplay.textContent || "";
          if (!currentDisplay.includes("_")) {
            alert("Congratulations! You've guessed the word!");
          } else if (remainingAttempts === 0) {
            alert(`Game over! The word was: ${selectedWord}`);
          }
        }
      }
      
      // Set up event listeners and initialize
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("start-game")?.addEventListener("click", () => {
          startGame();
        });
      
        document.getElementById("guess-button")?.addEventListener("click", () => {
          const input = document.getElementById("guess-input");
          if (input && input.value) {
            const letter = input.value.toLowerCase();
            (input as HTMLInputElement).value = "";
            if (letter.length === 1 && /^[a-z]$/.test(letter)) {
              handleGuess(letter);
            } else {
              alert("Please enter a single letter");
            }
          }
        });
      
        // Set initial scaffold only (no guesses yet)
        const hangmanImg = document.getElementById("hangman-image");
        if (hangmanImg) {
          (hangmanImg as HTMLImageElement).src = "../../images/hangman-6.png";
        }
      });
      