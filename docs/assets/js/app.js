function initializeGame() {
    const detective = document.querySelector('.detective');
    const container = document.getElementById('game-container');
    const clearMessage = document.getElementById('clear-message');

    // 画面サイズ取得
    const windowWidth = container.clientWidth;
    const windowHeight = container.clientHeight;

    // 下半分のランダムな位置に配置
    const maxX = windowWidth - 5;
    const minY = windowHeight / 2;
    const maxY = windowHeight - 5;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    detective.style.left = `${randomX}px`;
    detective.style.top = `${randomY}px`;

    // クリックイベント
    detective.addEventListener('click', () => {
        clearMessage.style.display = 'block';
        detective.style.display = 'none';
    });
}

// ゲーム初期化
window.addEventListener('load', initializeGame);