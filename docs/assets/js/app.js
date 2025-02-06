function initializeGame() {
    const detective = document.querySelector('.detective');
    const container = document.getElementById('game-container');
    const clearMessage = document.getElementById('clear-message');
    const background = document.getElementById('background');

    // 背景画像リスト
    const backgrounds = [
        "./assets/images/2.png",
        // "./assets/images/3.png",
    ];

    // ランダムで背景画像を設定
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    background.src = backgrounds[randomIndex];

    // 赤枠の絶対座標（調整してください）
    const fixedX = 300; // 赤枠のX座標
    const fixedY = 400; // 赤枠のY座標

    // 要素の位置を絶対座標で固定
    detective.style.left = `${fixedX}px`;
    detective.style.top = `${fixedY}px`;

    // クリックイベント
    detective.addEventListener('click', () => {
        clearMessage.style.display = 'block';
        detective.style.display = 'none';
    });
}

// ゲーム初期化
window.addEventListener('load', initializeGame);
