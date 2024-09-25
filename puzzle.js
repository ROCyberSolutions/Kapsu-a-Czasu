function checkStep1() {
    const answer = document.getElementById('step1Input').value.toLowerCase();
    if (answer === 'kosmos') {
        alert('Gratulacje! Udało Ci się rozwiązać pierwszą zagadkę.');
        loadNextStep();
    } else {
        alert('Niepoprawna odpowiedź. Spróbuj ponownie.');
    }
}

function loadNextStep() {
    const puzzleContainer = document.getElementById('puzzleContainer');
    puzzleContainer.innerHTML = `
        <div class="puzzle-step">
            <p>„Jestem nieuchwytny jak wiatr, każdy mnie czuje, ale nikt mnie nie widzi. Podpowiedź: zaczynam się na 'C' i kończę na 'y.'"</p>
            <input type="text" id="step2Input" placeholder="Wprowadź odpowiedź">
            <button onclick="checkStep2()">Sprawdź</button>
        </div>`;
}

function checkStep2() {
    const answer = document.getElementById('step2Input').value.toLowerCase();
    if (answer === 'ciśnienie') {
        alert('Gratulacje! Przechodzisz dalej.');
        // Dodaj kolejną zagadkę lub zakończ grę.
    } else {
        alert('Niepoprawna odpowiedź. Spróbuj ponownie.');
    }
}
