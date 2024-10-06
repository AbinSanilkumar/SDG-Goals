let currentQuestionIndex = 0;
let questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0 // Correct answer is "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1 // Correct answer is "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3 // Correct answer is "Pacific Ocean"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
        correct: 1 // Correct answer is "William Shakespeare"
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "80°C", "100°C", "110°C"],
        correct: 2 // Correct answer is "100°C"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correct: 2 // Correct answer is "Mitochondria"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 1 // Correct answer is "Carbon Dioxide"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        correct: 0 // Correct answer is "Tokyo"
    }
];

let player1Score = 0;
let player2Score = 0;
let questionAnswered = false; // Prevent multiple answers for the same question

// Initialize the game
function startGameWithNames() {
    // Hide name inputs
    document.getElementById("name-inputs").style.display = "none";

    // Show question box and player answer options
    document.getElementById("question-box").style.display = "block";
    document.getElementById("game-players").style.display = "flex"; // Use flex to align both player boxes
    document.getElementById("scores").style.display = "block";

    // Load the first question
    loadQuestion(currentQuestionIndex);

    // Listen for keypress events
    document.addEventListener('keydown', handleKeyPress);
}

// Load the current question
function loadQuestion(index) {
    const questionData = questions[index];
    const questionElement = document.getElementById("question");
    questionElement.textContent = questionData.question;

    const player1Choices = document.getElementById("player1-choices");
    const player2Choices = document.getElementById("player2-choices");

    // Clear previous choices
    player1Choices.innerHTML = "";
    player2Choices.innerHTML = "";

    // Reset questionAnswered flag to allow new answers
    questionAnswered = false;

    // Create buttons for each choice and append them to both player containers
    questionData.options.forEach((option, i) => {
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");

        btn1.textContent = option;
        btn2.textContent = option;

        // Add buttons for visual interaction
        player1Choices.appendChild(btn1);
        player2Choices.appendChild(btn2);
    });
}

// Handle key press events for both players
function handleKeyPress(event) {
    if (questionAnswered) return; // Prevent answering again after first answer

    const questionData = questions[currentQuestionIndex];

    // Player 1 keys: Q = 0, W = 1, E = 2, R = 3
    // Player 2 keys: 1 = 0, 2 = 1, 3 = 2, 4 = 3
    const player1KeyMapping = { 'q': 0, 'w': 1, 'e': 2, 'r': 3 };
    const player2KeyMapping = { '1': 0, '2': 1, '3': 2, '4': 3 };

    if (player1KeyMapping[event.key] !== undefined) {
        const answerIndex = player1KeyMapping[event.key];
        checkAnswer(1, answerIndex); // Player 1 pressed a key
    } else if (player2KeyMapping[event.key] !== undefined) {
        const answerIndex = player2KeyMapping[event.key];
        checkAnswer(2, answerIndex); // Player 2 pressed a key
    }
}

// Check if the answer is correct and update scores accordingly
function checkAnswer(player, answerIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;

    if (answerIndex === correctIndex) {
        if (player === 1) {
            player1Score += 3; // Player 1 answered correctly
        } else if (player === 2) {
            player2Score += 3; // Player 2 answered correctly
        }
    } else {
        if (player === 1) {
            player1Score -= 1; // Player 1 answered incorrectly
            player2Score += 1; // Player 2 gets a point
        } else if (player === 2) {
            player2Score -= 1; // Player 2 answered incorrectly
            player1Score += 1; // Player 1 gets a point
        }
    }

    questionAnswered = true; // Mark the question as answered
    updateScores(); // Update the score display
    goToNextQuestion(); // Move to the next question
}

// Update the scores in the UI
function updateScores() {
    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;
}

// Move to the next question or end the game if all questions are answered
function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex); // Load the next question
    } else {
        endGame(); // No more questions, end the game
    }
}

// End the game and redirect to game_over.html
function endGame() {
    // Redirect to the game over page to display final scores
    window.location.href = 'game_over.html';
}

