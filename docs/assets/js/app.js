function initializeGame() {
    const detective = document.querySelector('.detective');
    const container = document.getElementById('game-container');
    const clearMessage = document.getElementById('clear-message');
    const background = document.getElementById('background');

    // 背景画像リストと対応する座標
    const backgrounds = [
        { src: "./assets/images/2.png", x: 300, y: 400 },
        { src: "./assets/images/3.png", x: 400, y: 500 }
    ];

    // ランダムで背景画像を設定
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    
    background.src = selectedBackground.src;

    // 赤枠の座標を背景画像に応じて設定
    detective.style.left = `${selectedBackground.x}px`;
    detective.style.top = `${selectedBackground.y}px`;

    // クリックイベント
    detective.addEventListener('click', () => {
        clearMessage.style.display = 'block';
        detective.style.display = 'none';
    });
}

// ゲーム初期化
window.addEventListener('load', initializeGame);
