let gameMode = '';
let player1Name = '';
let player2Name = '';

function selectMode(mode) {
    gameMode = mode;
    document.getElementById('name-inputs').style.display = 'block';
    
    if (gameMode === 'multiplayer') {
        document.getElementById('player2-label').style.display = 'block';
        document.getElementById('player2-name').style.display = 'block';
    } else {
        document.getElementById('player2-label').style.display = 'none';
        document.getElementById('player2-name').style.display = 'none';
    }
}

function startGameWithNames() {
    const questionCount = document.getElementById('question-count').value;
    const timeLimit = document.getElementById('time-limit').value;

    localStorage.setItem('questionCount', questionCount);
    localStorage.setItem('timeLimit', timeLimit);

    player1Name = document.getElementById('player1-name').value || 'Player 1';
    localStorage.setItem('player1Name', player1Name);
    
    if (gameMode === 'multiplayer') {
        player2Name = document.getElementById('player2-name').value || 'Player 2';
        localStorage.setItem('player2Name', player2Name);
        window.location.href = 'multiplayer.html';
    } else {
        window.location.href = 'vs-computer.html'; // Placeholder for Vs Computer
    }
}

// Retrieve names for use in the multiplayer game
function loadPlayerNames() {
    player1Name = localStorage.getItem('player1Name');
    player2Name = localStorage.getItem('player2Name');
    document.getElementById('player1-heading').innerText = `${player1Name} (Q=W=E=R)`;
    document.getElementById('player2-heading').innerText = `${player2Name} (1=2=3=4)`;
}

// Call this function when loading the multiplayer page
loadPlayerNames();
