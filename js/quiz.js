let currentQuestion = 1;
const totalQuestions = 10;
let score = 0;

function startQuiz() {
    score = 0; // Reset score
    loadQuestion(currentQuestion); // Load the first question
}

function loadQuestion(questionNumber) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous content

    // Create feedback element
    const feedback = document.createElement('p');
    feedback.id = 'feedback';
    feedback.style.visibility = 'hidden'; // Initially hidden

    switch (questionNumber) {
        case 1:
            quizContainer.innerHTML = `
                <h1>Question 1</h1>
                <p>What year were the Sustainable Development Goals (SDGs) adopted?</p>
                <button onclick="checkAnswer(true, this)">A) 2015</button>
                <button onclick="checkAnswer(false, this)">B) 2000</button>
                <button onclick="checkAnswer(false, this)">C) 2020</button>
                <button onclick="checkAnswer(false, this)">D) 2022</button>
            `;
            break;
        case 2:
            quizContainer.innerHTML = `
                <h1>Question 2</h1>
                <p>How many Sustainable Development Goals are there?</p>
                <button onclick="checkAnswer(false, this)">A) 10</button>
                <button onclick="checkAnswer(false, this)">B) 15</button>
                <button onclick="checkAnswer(true, this)">C) 17</button>
                <button onclick="checkAnswer(false, this)">D) 20</button>
            `;
            break;
        case 3:
            quizContainer.innerHTML = `
                <h1>Question 3</h1>
                <p>When is the target year to achieve the 17 Sustainable Development Goals?</p>
                <button onclick="checkAnswer(true, this)">A) 2030</button>
                <button onclick="checkAnswer(false, this)">B) 2025</button>
                <button onclick="checkAnswer(false, this)">C) 2050</button>
                <button onclick="checkAnswer(false, this)">D) 2022</button>
            `;
            break;
        case 4:
            quizContainer.innerHTML = `
                <h1>Question 4</h1>
                <p>Which SDG aims to ensure access to affordable, reliable, sustainable, and modern energy for all?</p>
                <button onclick="checkAnswer(false, this)">A)Goal 6</button>
                <button onclick="checkAnswer(true, this)">B)Goal 7</button>
                <button onclick="checkAnswer(false, this)">C)Goal 9</button>
                <button onclick="checkAnswer(false, this)">D)Goal 13</button>
            `;
            break;
        case 5:
            quizContainer.innerHTML = `
                <h1>Question 5</h1>
                <p>What is the main objective of SDG 13?</p>
                <button onclick="checkAnswer(false, this)">A) Promote peaceful and inclusive societies</button>
                <button onclick="checkAnswer(true, this)">B) Combat climate change and its impacts</button>
                <button onclick="checkAnswer(false, this)">C) Ensure inclusive and equitable quality education</button>
                <button onclick="checkAnswer(false, this)">D) Reduce inequalities within and among countries</button>
            `;
            break;
        case 6:
            quizContainer.innerHTML = `
                <h1>Question 6</h1>
                <p>Which SDG is specifically aimed at achieving gender equality and empowering all women and girls?</p>
                <button onclick="checkAnswer(false, this)">A)Goal 2</button>
                <button onclick="checkAnswer(false, this)">B)Goal 4</button>
                <button onclick="checkAnswer(true, this)">C)Goal 5</button>
                <button onclick="checkAnswer(false, this)">D)Goal 10</button>
            `;
            break;
        case 7:
            quizContainer.innerHTML = `
                <h1>Question 7</h1>
                <p>In which year did the United Nations Millennium Development Goals (MDGs) conclude, leading to the creation of the SDGs?</p>
                <button onclick="checkAnswer(true, this)">A) 2015</button>
                <button onclick="checkAnswer(false, this)">B) 2012</button>
                <button onclick="checkAnswer(false, this)">C) 2020</button>
                <button onclick="checkAnswer(false, this)">D) 2008</button>
            `;
            break;
        case 8:
            quizContainer.innerHTML = `
                <h1>Question 8</h1>
                <p>Which year is set as the deadline to halt and reverse land degradation as per SDG 15 (Life on Land)?</p>
                <button onclick="checkAnswer(false, this)">A) 2020</button>
                <button onclick="checkAnswer(false, this)">B) 2025</button>
                <button onclick="checkAnswer(true, this)">C) 2030</button>
                <button onclick="checkAnswer(false, this)">D) 2040</button>
            `;
            break;
        case 9:
            quizContainer.innerHTML = `
                <h1>Question 9</h1>
                <p>Which SDG promotes the reduction of inequality within and among countries?</p>
                <button onclick="checkAnswer(false, this)">A)Goal 6</button>
                <button onclick="checkAnswer(true, this)">B)Goal 10</button>
                <button onclick="checkAnswer(false, this)">C)Goal 7</button>
                <button onclick="checkAnswer(false, this)">D)Goal 8</button>
            `;
            break;
        case 10:
            quizContainer.innerHTML = `
                <h1>Question 10</h1>
                <p> When was SDG 14, Life Below Water, first highlighted at the UN Ocean Conference?</p>
                <button onclick="checkAnswer(true, this)">A) 2017</button>
                <button onclick="checkAnswer(false, this)">B) 2018</button>
                <button onclick="checkAnswer(false, this)">C) 2015</button>
                <button onclick="checkAnswer(false, this)">D) 2020</button>
            `;
            break;
        default:
            showResults(); // Show results if all questions are answered
            return;
    }
    quizContainer.appendChild(feedback); // Append feedback to quiz container
}

function checkAnswer(isCorrect, button) {
    const feedback = document.getElementById('feedback');
    feedback.style.visibility = 'visible'; // Show feedback
    if (isCorrect) {
        feedback.textContent = "Correct!";
        feedback.className = 'correct'; // Set feedback class for correct answer
        score++; // Increment score
    } else {
        feedback.textContent = "Incorrect!";
        feedback.className = 'incorrect'; // Set feedback class for incorrect answer
    }

    // Disable buttons after answering
    const buttons = button.parentElement.children;
    for (let btn of buttons) {
        btn.disabled = true;
    }

    // Move to the next question after 2 seconds
    setTimeout(() => {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }, 2000);
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score is ${score} out of ${totalQuestions}.</p>
    `;
}
