document.addEventListener('DOMContentLoaded', () => {
    fadeInText('title');
    fadeInText('welcomeText');
    document.getElementById('startButton').addEventListener('click', function() {
        window.location.href = 'puzzle.html';
    });
});

function fadeInText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    element.innerHTML = ''; // Clear the original text

    Array.from(text).forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char; // Preserve spaces
        span.style.opacity = '0';
        span.style.transition = `opacity 0.5s ease ${index * 100}ms`;
        element.appendChild(span);
        setTimeout(() => {
            span.style.opacity = '1';
        }, index * 100); // Fade in each character with a delay
    });
}
