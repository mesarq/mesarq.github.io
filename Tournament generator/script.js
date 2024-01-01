document.addEventListener('DOMContentLoaded', function() {
    // Load logos and tournament data
    // Initialize the tournament bracket
});

function shuffleLogos() {
    // Shuffle logos and create pairings
}

function updateTournament() {
    // Update the tournament based on votes
}

document.addEventListener('DOMContentLoaded', function() {
    loadAndDisplayNextPair();
});

function loadAndDisplayNextPair() {
    // Fetch the tournament data from tournament.json
    fetch('tournament.json')
        .then(response => response.json())
        .then(tournamentData => {
            const nextPair = tournamentData.find(pair => !pair.complete);
            if (nextPair) {
                displayPair(nextPair);
            } else {
                document.getElementById('tournament-bracket').innerHTML = 'Tournament complete!';
            }
        });
}


function displayPair(pairData) {
    const bracketContainer = document.getElementById('tournament-bracket');
    bracketContainer.innerHTML = '';

    pairData.pair.forEach(logo => {
        const logoContainer = document.createElement('div');
        logoContainer.innerHTML = `<h3>${logo}</h3><button onclick="vote('${logo}')">Vote</button>`;
        bracketContainer.appendChild(logoContainer);
    });
}
function vote(logoName) {
    // This is a placeholder for the voting functionality.
    // Actual implementation will require backend logic to handle IP tracking and vote recording.
    console.log('Voted for:', logoName);
    // Logic to send vote to the server goes here
}

