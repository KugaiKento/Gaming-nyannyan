function initializeGame() {
    const detective = document.querySelector('.detective');
    const container = document.getElementById('game-container');
    const clearMessage = document.getElementById('clear-message');
    const background = document.getElementById('background');

    // Background image list
    const backgrounds = [
        "./assets/images/2.png",
        // "./assets/images/3.png",
    ];

    // Select a random background
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    background.src = backgrounds[randomIndex];

    // Get window dimensions
    const windowWidth = container.clientWidth;
    const windowHeight = container.clientHeight;

    // Coordinates for the red-circled area
    const redCircleX = 300; // Adjust based on the red circle in the image
    const redCircleY = 400; // Adjust based on the red circle in the image
    const redCircleWidth = 100; // Approximate width of the circle area
    const redCircleHeight = 50; // Approximate height of the circle area

    // Randomize position within the red circle area
    const randomX = redCircleX + Math.random() * redCircleWidth;
    const randomY = redCircleY + Math.random() * redCircleHeight;

    detective.style.left = `${randomX}px`;
    detective.style.top = `${randomY}px`;

    // Click event for the detective
    detective.addEventListener('click', () => {
        clearMessage.style.display = 'block';
        detective.style.display = 'none';
    });
}

// Initialize the game on window load
window.addEventListener('load', initializeGame);
